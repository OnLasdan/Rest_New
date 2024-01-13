const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authenticateToken = require('../middlewares/authMiddleware');
const nodemailer = require('nodemailer'); 
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const {
      email,
      password,
      username
    } = req.body;

    // Check if user with the same email exists
    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.status(400)
        .json({
          error: 'User with this email already exists.'
        });
    }

    // Generate a random API key
    const apiKey = Math.random()
      .toString(36)
      .substr(2, 15);

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      apiKey,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    // Generate JWT token
    const accessToken = jwt.sign({
      email
    }, 'Konbanwa', {
      expiresIn: '15m'
    });

    // Create verification URL
    const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${accessToken}`;

    // Send email verification
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lzaky404@gmail.com',
        pass: 'kqfsqrqrdigiaicr',
      },
    });

    const mailOptions = {
      from: '"M.U.F.A.R." <admin@onlasdan.tech>',
      to: email,
      subject: 'Account Verification',
      html: `<p>Click the button to verify your email:</p><a href="${verificationUrl}" style="padding: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>`,
    };

    await transporter.sendMail(mailOptions);


    // Generate refresh token
    const refreshToken = jwt.sign({
      email
    }, 'RefreshTokenSecret', {
      expiresIn: '30d'
    });

    // Set refresh token as an HttpOnly cookie
    res.cookie('RefreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    });

    res.json({
      email: newUser.email,
      username: newUser.username,
      limit: newUser.limit,
      status: newUser.status,
      apiKey: newUser.apiKey,
      isVerified: newUser.isVerified,
      token: accessToken,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500)
      .json({
        error: 'Internal Server Error'
      });
  }
});

router.get('/profile', async (req, res) => {
  try {
    const {
      email,
      password
    } = req.query;

    // Check if user exists
    const user = await User.findOne({
      email
    });
    if (!user) {
      return res.status(400)
        .json({
          error: 'Invalid email or password.'
        });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400)
        .json({
          error: 'Invalid email or password.'
        });
    }

    // Generate JWT token
    const accessToken = jwt.sign({
      email
    }, 'Konbanwa', {
      expiresIn: '15m'
    });

    // Generate refresh token
    const refreshToken = jwt.sign({
      email
    }, 'RefreshTokenSecret', {
      expiresIn: '30d'
    });

    // Set refresh token as an HttpOnly cookie
    res.cookie('RefreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    });

    res.json({
      email: user.email,
      username: user.username,
      limit: user.limit,
      status: user.status,
      apiKey: user.apiKey,
      isVerified: user.isVerified,
      token: accessToken,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500)
      .json({
        error: 'Internal Server Error'
      });
  }
});


router.get('/cekey', async (req, res) => {
  // Clear refresh token cookie to logout
  const {
    key
  } = req.query;
  const user = await User.findOne({
    key
  });
  if (!user) {
    return res.status(400)
      .json({
        error: 'Invalid apikey.'
      });
  }
  res.json({
    limit: user.limit
  })

});

module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if user with the same email exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    // Generate a random API key
    const apiKey = Math.random().toString(36).substr(2, 15);

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
    const token = jwt.sign({ email }, 'Konbanwa', { expiresIn: '1h' });

    // Create verification URL
    const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${token}`;

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

    res.json({ status: 'Success', message: 'Check your email for account verification.' });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, 'Konbanwa', { expiresIn: '7d' });

    // Set the token in the response cookie
    res.cookie('Authorization', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    });

    res.json({ email: user.email, username: user.username, limit: user.limit, status: user.status, apiKey: user.apiKey, isVerified: user.isVerified, token: token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    res.json({ email: user.email, username: user.username, limit: user.limit, status: user.status });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

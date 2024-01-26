import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/register', async (req, res) => {
   try {
      const { email, password, username } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
         return res.status(400).json({ error: 'User with this email already exists.' });
      }

      const apiKey = Math.random().toString(36).substr(2, 15);

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
         apiKey,
         email,
         password: hashedPassword,
         username,
      });

      await newUser.save();

      const accessToken = jwt.sign({ email }, 'Konbanwa', { expiresIn: '15m' });

      const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${accessToken}`;

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

      res.sendFile(new URL('../views/pages/login/success.html', import.meta.url).pathname); 
   } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
});

router.get('/profile', async (req, res) => {
   try {
      const { email, password } = req.query;

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ error: 'Invalid email or password.' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         return res.status(400).json({ error: 'Invalid email or password.' });
      }
      res.json({
         email: user.email,
         username: user.username,
         limit: user.limit,
         status: user.status,
         apiKey: user.apiKey,
         isVerified: user.isVerified,
      });
   } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
});

router.get('/cekey', async (req, res) => {
   const { key } = req.query;
   const user = await User.findOne({ key });
   if (!user) {
      return res.status(400).json({ error: 'Invalid apikey.' });
   }
   res.json({ limit: user.limit });
});

export default router;

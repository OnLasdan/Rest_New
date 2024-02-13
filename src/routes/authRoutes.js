import express from 'express'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import nodemailer from 'nodemailer'

const router = express.Router()

router.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, username, apiKey } = req.body
    if (!email || !validator.isEmail(email))
      return res.status(400).json({ error: 'Email tidak valid' })
    if (!validator.isLength(password, { min: 6 }))
      return res.status(400).send('Password harus minimal 6 karakter')
    if (!validator.isLength(username, { min: 3 }))
      return res.status(400).send('Username harus minimal 3 karakter')

    const existingUser = await User.findOne({ email })
    const existingKey = await User.findOne({ apiKey })

    if (existingUser)
      return res
        .status(400)
        .json({ error: 'User with this email already exists.' })
    if (existingKey && existingKey.apiKey === apiKey)
      return res
        .status(400)
        .json({ error: 'User with this apiKey already exists.' })

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      apiKey,
      email,
      password: hashedPassword,
      username,
    })
    await newUser.save()

    const accessToken = jwt.sign({ email }, 'Konbanwa', { expiresIn: '15m' })
    const verificationUrl = `${req.protocol}://${req.get('host')}/verify/${accessToken}`
    await sendVerificationEmail(email, verificationUrl)

    res.send('Check email untuk verifikasi email')
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/api/auth/profile', async (req, res) => {
  try {
    const { email, password } = req.query
    const user = await User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ error: 'Invalid email or password.' })

    res.json({
      email: user.email,
      username: user.username,
      limit: user.limit,
      status: user.status,
      apiKey: user.apiKey,
      isVerified: user.isVerified,
    })
  } catch (error) {
    console.error('Error logging in:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/cekey', async (req, res) => {
  const { key } = req.query
  const user = await User.findOne({ apiKey: key })

  if (!user) return res.status(400).json({ error: 'Invalid apikey.' })

  res.json({ limit: user.limit })
})

async function sendVerificationEmail(toEmail, verificationUrl) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lzaky404@gmail.com',
      pass: 'kqfsqrqrdigiaicr',
    },
  })

  const mailOptions = {
    from: '"M.U.F.A.R." <admin@onlasdan.tech>',
    to: toEmail,
    subject: 'Account Verification',
    html: `<p>Click the button to verify your email:</p><a href="${verificationUrl}" style="padding: 10px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>`,
  }

  await transporter.sendMail(mailOptions)
}

export default router

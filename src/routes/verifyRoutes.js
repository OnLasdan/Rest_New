import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
const router = express.Router()

router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params

    if (!token) {
      return res.status(400).json({ error: 'Token not provided.' })
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, 'Konbanwa')

    // Find the user in the database
    const user = await User.findOne({ email: decoded.email })

    if (!user) {
      return res.status(404).json({ error: 'User not found.' })
    }

    // Check if the user is already verified
    if (user.isVerified) {
      return res.status(400).json({ error: 'User is already verified.' })
    }

    // Update user's verification status
    user.isVerified = true
    await user.save()

    res.json({ status: 'Success', message: 'Email verification successful.' })
  } catch (error) {
    console.error('Error verifying email:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router

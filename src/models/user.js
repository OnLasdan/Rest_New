import mongoose from 'mongoose'

const { Schema } = mongoose
mongoose.connect(
  'mongodb+srv://pkok1024:12345@pkok.qh3qdes.mongodb.net/?retryWrites=true&w=majority'
)

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    default: 35,
  },
  status: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
})

const User = mongoose.model('User', userSchema)

export default User

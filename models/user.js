const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://apidatabase:OHgeWUpkrOXvcSf7@cluster0.uhrq7xg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
});

const User = mongoose.model('User', userSchema);

module.exports = User;

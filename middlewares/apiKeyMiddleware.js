// middleware/apiKeyMiddleware.js
const User = require('../models/user');

const apiKeyMiddleware = async (req, res, next) => {
  const apiKey = req.query.apikey;

  if (!apiKey) {
    return res.status(401).json({ error: 'API key is required.' });
  }

  // Validate API key
  const user = await User.findOne({ apiKey });

  if (!user) {
    return res.status(401).json({ error: 'Invalid API key.' });
  }

  // Check user status
  if (user.status === 'premium' && user.limit <= 0) {
    return res.status(403).json({ error: 'Premium user limit exceeded.' });
  }

  // Additional conditions can be added as needed

  next(); // Continue to the next middleware or route handler
};

module.exports = apiKeyMiddleware;

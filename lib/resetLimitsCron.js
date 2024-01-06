const cron = require('node-cron');
const User = require('../models/user');

// Schedule a cron job to run every day at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
  try {
    // Reset API key limits for all users
    await User.updateMany({}, { $set: { limit: 120 } });

    console.log('API key limits reset successfully.');
  } catch (error) {
    console.error('Error resetting API key limits:', error);
  }
});

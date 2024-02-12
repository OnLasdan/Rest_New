import cron from 'node-cron'
import User from '../models/user.js'
async function resetLimitsCron() {
  // Schedule a cron job to run every day at midnight (00:00)
  cron.schedule('0 0 * * *', async () => {
    try {
      await User.updateMany({}, { $set: { limit: 120 } })

      console.log('API key limits reset successfully.')
    } catch (error) {
      console.error('Error resetting API key limits:', error)
    }
  })
}
export default resetLimitsCron

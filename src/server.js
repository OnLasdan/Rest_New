import app from './app.js'
import chalk from 'chalk'
const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(chalk.cyan(`Server is running on port ${port}`))
})
export default app

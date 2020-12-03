const chalk = require('chalk')

const error = chalk.bold.red
const success = chalk.bold.green
const warning = chalk.bold.yellow

module.exports = {
    success:success,
    error:error,
    warning:warning
}
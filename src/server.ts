import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { Server } from 'http'
// import { logger, errorLogger } from "./shared/logger";

// Uncaught Expectation
// un-handleRejection
// SIGTERM

process.on('uncaughtException', error => {
  console.error(error)
  process.exit(1)
})
let server: Server

async function main() {
  try {
    console.log('database connected')
    await mongoose.connect(config.database_url as string)

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.error('failed to connect db', err)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()

process.on('SIGTERM', () => {
  console.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})

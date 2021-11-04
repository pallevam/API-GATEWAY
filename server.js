import express from 'express'
import path from 'path'
const {setupLogging} = require('./logging')
const {setupProxies} = require('./proxy')
const {setupAuth} = require('./auth')
const {setupRateLimit} = require('./ratelimit')
const {setupCreditCheck} = require('./creditcheck')
const app = express()
const PORT = 8080
import morgan from 'morgan'
import { ROUTES } from './routes'

setupLogging(app)
setupRateLimit(app, ROUTES)
setupAuth(app, ROUTES)
setupCreditCheck(app, ROUTES)
setupProxies(app, ROUTES)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})


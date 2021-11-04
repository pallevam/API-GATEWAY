import rateLimit from 'express-rate-limit'

const setupRateLimit = (app, ROUTES) => {
    ROUTES.forEach(r => {
        if(r.rateLimit) {
            app.use(r.url, rateLimit(r.rateLimit))
        }
    })
    console.log('Rate limiting applied on free to use routes.')
}

exports.setupRateLimit = setupRateLimit
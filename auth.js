import Keycloak from 'keycloak-connect'
import session from 'express-session'

const setupAuth = (app, routes) => {
    var memoryStore = new session.MemoryStore()
    var keycloak = new Keycloak({ store: memoryStore })

    app.use(session({
        secret: '<RAMDON GENERATED TOKEN',
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    }))

    app.use(keycloak.middleware())

    routes.forEach(r => {
        if(r.auth) {
            app.use(r.url, keycloak.protect(), function (req, res, next) {
                next()
            })
        }
    })
}

exports.setupAuth = setupAuth
const express = require('express')
const testRoutes = require('./APIs/name.routes.js')
const routes = express.Router()

routes.get('/', (req, res) => {
  res.json('main api route')
})

routes.use('/name', testRoutes)

module.exports = routes

const express = require('express')
const testRoutes = require('./APIs/test.routes.js')
const routes = express.Router()


routes.get('/', (req, res) => {
    res.send('main api route');
});

routes.use('/test',testRoutes);

module.exports = routes;
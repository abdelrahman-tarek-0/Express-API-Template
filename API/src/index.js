const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const expressRateLimit = require('express-rate-limit');
const error_handler_middleware = require('../middleware/error.middleware.js');


// config the server 
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(expressRateLimit({
    windowMs: 30 * 1000,
    max: 15,
    standardHeaders: true,
	legacyHeaders: false
}));

app.use(helmet());
app.use(express.json());
app.use(cors())

app.get('/api', (req,res)=>{
    res.send('Hello World');
});


//error handling
app.use(error_handler_middleware);
app.use((_req, res) => {
    res.status(404).json({
        message: 'API route not found (check the documentation)',
    });
});


app.listen(port,()=>{
    console.log("server is running")
    console.log(`on localhost:${port}`)
})

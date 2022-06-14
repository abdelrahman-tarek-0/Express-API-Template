const express = require('express');
const cors = require('cors');


// config the server 
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())


app.use('/api', (req,res)=>{
    res.send('Hello World');
});


// if no endpoint is found, return 404
app.use((_req, res) => {
    res.status(404).json({
        message: 'API route not found',
    });
});


app.listen(port,()=>{
    console.log("server is running")
    console.log(`on localhost:${port}`)
})

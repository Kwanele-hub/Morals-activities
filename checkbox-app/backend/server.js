const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


app.get('/',(req,res) => {
    res.send('we home');

});
 app.post('/posts', (req, res) => {

 });
 mongoose.connect(process.env.CONNECTION_STRING,
    {useNewUrlParser: true,
    useUnifiedTopology: true },
    ()=>console.log(`MongoDB is up and running...`))

 app.listen(4000);
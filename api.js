const client = require('./database.js')
const express = require('express');
const app = express();

app.listen(443, ()=>{
console.log("Server is now listening at port 443");
})

client.connect();


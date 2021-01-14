const express = require('express');
const users = require('./IBearYou_BE/Users');

const app = express();

//Middleware
//const logger = (req, res, next) => {
//    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//    next();
//}

//Init Middleware
//app.use(logger);

//ยิง api
app.get('/api/user', (req, res) => {
    res.json(users);
});
//app.get('/', (req,res) => {
//    res.send('Hello, Express!');
//})

const PORT = process.env.PORT || 433;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
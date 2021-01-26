const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');





const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// homepage route
app.get('/', (req,res,next) => {
    res.send('Hello, Express!');
})
app.post('/list-question', (req,res,next) => {
    console.log(req)
    res.send('Hello, Express!');
})


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


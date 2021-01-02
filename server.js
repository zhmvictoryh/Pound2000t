const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express()

app.get('/', (req,res) => {
    res.send('Hello, Express!');
})

const PORT = process.env.PORT || 443;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

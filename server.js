const diary = require('./diary')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// database
//const db = require('./db');
//test database
/*db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))*/


/*try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// homepage route
app.get('/', (req,res,next) => {
    res.send('Hello, Express!');
})
app.get('/api/list-diary',(req,res,next)=>{
   const json = req.body
   const ret = diary.list_all(json)
   res.send(ret)
})
app.post('/list-question', (req,res,next) => {
    console.log(req)
    res.send('Hello, Express!');
})


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

import diary  from './helpers/diary';
import card  from './helpers/card';
import choices  from './helpers/choices';
import feel  from './helpers/feel';
import question  from './helpers/question';
import question_type  from './helpers/question_type';
import result  from './helpers/result';
import questionnaires  from './helpers/questionnaires';
import questionnaire_question  from './helpers/questionnaire_question';
import heal_sentence  from './helpers/heal_sentence';
import users  from './helpers/users';

const login = require('./routes/login')
const register = require('./routes/register')
const profile = require('./routes/profile')

const app = express();
const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())
app.use('/api/v1',router)


// homepage route
app.get('/', (req,res,next) => {
    res.send('Hello, Express!');
})

// login
router.use('/profile',profile)
router.use('/login',login)
router.use('/register',register)

// test get api users table
app.get('/api/list-users',async (req,res,next)=>{
   const json = req.body
   const ret = await users.list_all(json)
   console.log(ret)
   res.send(ret)
})

app.post('/api/register',async (req,res,next)=>{
   const json = req.body
   const ret = await users.register(json)
   console.log(ret)
   res.send(ret)
})

// diary 
app.get('/api/list-diary',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.list_all(json)
   console.log(ret)
   res.send(ret)
})
app.get('/api/list-feel',async (req,res,next)=>{
   const json = req.body
   const ret = await feel.list_all(json)
   console.log(ret)
   res.send(ret)
})

// check-up
app.get('/api/list-question',async (req,res,next)=>{
   const json = req.body
   const ret = await question.list_all(json)
   console.log(ret)
   res.send(ret)
})
app.get('/api/list-choices',async (req,res,next)=>{
   const json = req.body
   const ret = await choices.list_all(json)
   console.log(ret)
   res.send(ret)
})
app.get('/api/list-questionnaires',async (req,res,next)=>{
   const json = req.body
   const ret = await questionnaires.list_all(json)
   console.log(ret)
   res.send(ret)
})
app.get('/api/list-questionnaire_question',async (req,res,next)=>{
   const json = req.body
   const ret = await questionnaire_question.list_all(json)
   console.log(ret)
   res.send(ret)
})
app.get('/api/list-question_type',async (req,res,next)=>{
   const json = req.body
   const ret = await question_type.list_all(json)
   console.log(ret)
   res.send(ret)
})

// result
app.get('/api/list-result',async (req,res,next)=>{
   const json = req.body
   const ret = await result.list_all(json)
   console.log(ret)
   res.send(ret)
})

// card
app.get('/api/list-card',async (req,res,next)=>{
   const json = req.body
   const ret = await card.list_all(json)
   console.log(ret)
   res.send(ret)
})

// heal_sentence
app.get('/api/list-heal_sentence',async (req,res,next)=>{
   const json = req.body
   const ret = await heal_sentence.list_all(json)
   console.log(ret)
   res.send(ret)
})


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


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
import alarm  from './helpers/alarm';
import sound from './helpers/sound';

const login = require('./routes/login')
const register = require('./routes/register')

const app = express();
const router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())


// homepage route
app.get('/', (req,res,next) => {
    res.send('Hello, Express!');
})

// get all users
app.get('/api/list-users',async (req,res,next)=>{
   const json = req.body
   const ret = await users.list_all(json)
   console.log(ret)
   res.send(ret)
})

app.get('/api/list-user_name',async (req,res,next)=>{
   const json = req.body
   const ret = await users.get_user_name(json)
   console.log(ret)
   res.send(ret)
})

// login
app.post('/api/login',async (req,res,next)=>{
   const json = req.body
   const ret = await users.login(json)
   console.log(ret)
   res.send(ret)
})

// register
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

app.post('/api/create_diary',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.create_diary(json)
   console.log(ret)
   res.send(ret)
})

app.put('/api/edit_diary',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.edit_diary(json)
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

app.post('/api/result',async (req,res,next)=>{
   const json = req.body
   const ret = await result.result(json)
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
   const ret = await heal_sentence.get_one_sentence (json)
   console.log(ret)
   res.send(ret)
})

// sound
app.get('/api/list-sound',async (req,res,next)=>{
   const json = req.body
   const ret = await sound.list_all(json)
   console.log(ret)
   res.send(ret)
})

// ---------------- Home -----------------

// list-allGood
app.get('/api/list-allgood',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.list_allgood(json)
   console.log(ret)
   res.send(ret)
})

// list-allBad
app.get('/api/list-allbad',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.list_allbad(json)
   console.log(ret)
   res.send(ret)
})

// list-allWish
app.get('/api/list-allwish',async (req,res,next)=>{
   const json = req.body
   const ret = await diary.list_allwish(json)
   console.log(ret)
   res.send(ret)
})

// --- Feel function ---
app.get('/api/list-allfeel',async (req,res,next)=>{
   const json = req.body
   const ret = await feel.list_allfeel(json)
   console.log(ret)
   res.send(ret)
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
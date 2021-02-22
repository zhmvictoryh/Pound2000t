const jwt = require('jsonwebtoken');
const express = require("express");
const userController = require('../controllers/userController');
const router = express.Router();
const dotenv = require('dotenv');

// get config vars
dotenv.config();



router.post('/', async (req, res) => {
  var user_name = req.body.user_name
  var password = req.body.password



  userController.getUserByUsername(user_name).then((e) => {
    // console.log(e)
    if (e.length > 0 && e[0].password === password) {
      console.log("success")

      var token = generateAccessToken({
        id: e[0].id,
        first_name: e[0].first_name,
        last_name: e[0].last_name,
        birthday: e[0].birthday,
        user_name: e[0].user_name,
        email: e[0].email,
        password: e[0].password,
        pic_id: e[0].pic_id,

      })

      res.json({
    
        status: "success",
        message: token
      })

    } else {
      console.log("user_name or password is incoorect")
    }
  }).catch((e) => {
    console.log(e)
  });


  
})



function generateAccessToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }
  
  
  module.exports = router
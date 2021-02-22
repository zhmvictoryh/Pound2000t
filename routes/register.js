const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', async (req, res) => {
  var user = req.body.user
  console.log(user)
  
    if(user.name === null || user.name === undefined || user.name === '' || user.name <= 0){
      var response = {
        status: "error",
        message: "name is invalid"
      }
      return res.json(response)
    }
    if(user.surename === null || user.surename === undefined || user.surename === '' || user.surename <= 0){
      var response = {
        status: "error",
        message: "surename is invalid"
      }
      return res.json(response)
    }
    if(user.birthday === null || user.birthday === undefined || user.birthday === '' || user.birthday <= 0){
      var response = {
        status: "error",
        message: "birthday is invalid"
      }
      return res.json(response)
    }
    if(user.username === null || user.username === undefined || user.username === '' || user.username <= 0){
      var response = {
        status: "error",
        message: "username is invalid"
      }
      return res.json(response)
    }
    if(user.email === null || user.email === undefined || user.email === '' || user.email <= 0){
      var response = {
        status: "error",
        message: "email is invalid"
      }
      return res.json(response)
    }
    if(user.password === null || user.password === undefined || user.password === '' || user.password <= 0){
      
    }
    userController.addUser(user).then((e) => {
    console.log("success",e)

    if(e.length === 0){
     res.json("success")
    }else{
      res.json("error")
    }
  }).catch((e) => {
    var response = {
      status: "error",
      message: e.detail
    }
    res.json(response)
    console.log("error",e.detail)
  });
  
})

module.exports = router
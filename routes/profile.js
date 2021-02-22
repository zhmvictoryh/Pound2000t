const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const middleware = require('../middleware/authenticate')

router.get('/', middleware.authenticateToken, async (req, res) => {

    var user = await userController.getUserById(req.user.id)
    console.log(user)
    var userInfo = {
        id: user[0].id,
        name: user[0].name,
        surename: user[0].surename,
        birthday: user[0].birthday,
        username: user[0].username,
        email: user[0].email,
        password: user[0].password,
        profilepicture: user[0].profilepicture
    }

    res.json(userInfo)

})

module.exports = router
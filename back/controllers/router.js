/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./userController'),
    SessionController = require('./SessionController')

/*
 * Router
 ***********/

// Article
router.route('/register')
    .post(userController.register)

router.route('/login')
    .post(userController.post)

router.route('/session')
    .get(SessionController.get)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;
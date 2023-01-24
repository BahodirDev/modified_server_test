const { Router } = require('express');
const { loginUser } = require('../controller/userController');
const route = Router();

route.post('/',loginUser);


module.exports = route;
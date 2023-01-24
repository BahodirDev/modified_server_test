const {Router} = require('express');
const route = Router();
const register = require('./register');
const login = require('./login');
const user = require('./user');
const category = require('./category');
const question = require('./questions');

route.use("/api/register",register);
route.use("/api/login",login);


route.use("/api/user",user);
route.use("/api/category",category);
route.use("/api/question",question);

module.exports = route;
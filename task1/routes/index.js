var express = require('express');
var router = express.Router();
const User = require('../models/userModel');
const { validationResult } = require('express-validator');
const {validateEmail,validatePassword} = require('./customValidators')

const bcrypt = require('bcrypt');
router.get('/', function(req, res) {
res.render("hello-world", { errors: [] });
});


module.exports = router;
'use strict'

const Signup = require('./signup')
const signup = new Signup()
// db connection

module.exports = class Salama {
  registerUser (request) {
    signup.test(request)
  }
}

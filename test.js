const Salama = require('./lib/salama')

const request = {
  userName: 'John Doe',
  email: 'johndoe@gmail.com',
  password: 'thesecretpassword'
}
new Salama().registerUser(request)

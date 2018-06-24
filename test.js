const Salama = require('./lib/salama')

const request = {
  register: {
    dbName: 'myproject',
    collection: 'users',
    url: 'mongodb://localhost:27017'
  },
  request: {
    userName: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'thesecretpassword'
  }
}
new Salama().registerUser(request)
  .then(result => console.log(result))
  .catch(error => console.log(error))

const Salama = require('./lib/salama')

const request = {
  register: {
    dbName: 'myproject',
    collection: 'users',
    url: 'mongodb://localhost:27017'
  },
  request: {
    userName: 'Test man',
    email: 'testman@gmail.com',
    password: 'thestrongestpasswordintheworldw'
  }
}
new Salama().registerUser(request)
  .then(result => console.log(result))
  .catch(error => console.log(error))

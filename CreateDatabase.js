const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'myproject'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  console.log('Connected successfully to server')
  client.db(dbName)
  client.close()
})

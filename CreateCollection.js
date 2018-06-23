const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'myproject'

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  console.log('connected correctly to server')
  const db = client.db(dbName)

  createUsersCollection(db, () => {
    console.log('connection closed')
    client.close()
  })
})

function createUsersCollection (db, callback) {
  db.createCollection('users', (err, results) => {
    if (err) throw err
    console.log('Collection created.')
    callback()
  })
}

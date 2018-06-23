const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'myproject'
const document = {userName: 'John Doe', password: 'thesecretpassword'}

MongoClient.connect(url, (err, client) => {
  if (err) throw err
  console.log('Connected correctly to server')
  const db = client.db(dbName)

  db.collection('users').insertOne(document, (err, r) => {
    if (err) throw err
    if (r.insertedCount === 1) {
      console.log('Inserted document')
    }

    client.close()
  })
})

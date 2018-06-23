'use strict'

// const Signup = require('./signup')
// const signup = new Signup()
const MongoClient = require('mongodb').MongoClient
// db connection

module.exports = class Salama {
  registerUser (params) {
    const url = params.register.url
    const dbName = params.register.dbName
    const collection = params.register.collection
    const document = params.request
    // hash password

    MongoClient.connect(url, (err, client) => {
      if (err) throw err
      console.log('Connected successfully to server')
      const db = client.db(dbName)

      this.insertUser(db, collection, document, () => {
        console.log('close connection')
        client.close()
      })
    })
  }

  insertUser (db, collection, document, callback) {
    db.collection(collection).insertOne(document, (err, record) => {
      if (err) throw err
      if (record.insertedCount === 1) {
        console.log('document has been inserted')
        callback()
      }
    })
  }
}

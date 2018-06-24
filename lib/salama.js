'use strict'

const Database = require('./database')
const DatabaseConnection = new Database()
const securePassword = require('secure-password')
const pwd = securePassword()
let db

module.exports = class Salama {
  registerUser (params) {
    const register = new Promise((resolve, reject) => {
      const url = params.register.url
      const dbName = params.register.dbName
      const collection = params.register.collection
      const document = params.request
      const password = params.request.password

      DatabaseConnection.openConnection(url, dbName)
        .then(client => {
          db = client.db(dbName)
          this.hashPassword(password)
            .then(hashedPassword => {
              document.password = hashedPassword

              this.insertUser(db, collection, document, () => {
                resolve('User created successfully')
                DatabaseConnection.closeConnection(client)
              })
            })
            .catch(error => {
              reject(error.message)
            })
        })
        .catch(error => {
          reject(error.message)
        })
    })
    return register
  }

  hashPassword (password) {
    const hashedPassword = new Promise((resolve, reject) => {
      const userPassword = Buffer.from(password)
      pwd.hash(userPassword, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })

    return hashedPassword
  }

  insertUser (db, collection, document, closeConnection) {
    db.collection(collection).insertOne(document, (err, record) => {
      if (err) throw err
      if (record.insertedCount === 1) {
        closeConnection()
      }
    })
  }
}

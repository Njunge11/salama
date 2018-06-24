const MongoClient = require('mongodb').MongoClient

module.exports = class DatabaseConnection {
  openConnection (url, dbName) {
    const connect = new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, client) => {
        if (err) reject(err.message)
        resolve(client)
      })
    })
    return connect
  }

  closeConnection (client) {
    client.close()
    console.log('connection closed')
  }
}

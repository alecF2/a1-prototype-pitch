import express from 'express'
import * as r from 'rethinkdb'

const port = 4000
const app = express()
let connection: r.Connection

app.post("/add_item", (req, res) => {
  r.db('a1').table('vocab_items').insert({
    language: "Spanish",
    translation: "book"
  }).run(connection, (err, result) => {
    if (err) throw err
    console.log(JSON.stringify(result, null, 2))
    res.send("success!")
  })
})

app.listen(port, () => {
  console.log("listening on port " + port)
  r.connect( {
    host: 'localhost',
    port: 28015
  }, function(err, conn) {
    if (err) throw err
    connection = conn
  })
})


import express from 'express'
import * as r from 'rethinkdb'
import multer from 'multer'

const port = 4000
const app = express()
const upload = multer()

let connection: r.Connection

app.use(express.json())

app.post("/add_item", upload.single('image'), (req, res) => {
  // console.log(req.body)
  // console.log(req.file)
  r.db('a1').table('vocab_items').insert({
    word: req.body.word,
    language: req.body.language,
    translation: req.body.translation,
    example: req.body.example,
    image: req.file!.buffer,
    image_desc: req.body.image_desc
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
    console.log("connected to rethinkDB!")
  })
})


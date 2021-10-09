import express from 'express'
import * as r from 'rethinkdb'
import multer from 'multer'
import { join } from 'path'

const port = 4000
const app = express()
const upload = multer()

let connection: r.Connection

app.use(express.static(join(__dirname, "..", "..", "build")))
app.use(express.json())

const fields = [
  {
    name: "image",
    maxCount: 1
  },
  {
    name: "pronunciation",
    maxCount: 1
  }
]

app.post("/add_item", upload.fields(fields), (req, res) => {
  // console.log(req.body)
  console.log(req.files)
  const files = req.files as Record<string, Express.Multer.File[]> | undefined
  // console.log(files.image[0])
  // console.log(files.pronunciation[0])
  r.db('a1').table('vocab_items').insert({
    word: req.body.word,
    language: req.body.language,
    translation: req.body.translation,
    example: req.body.example,
    image: {
      mimetype: files?.image[0].mimetype,
      buffer: files?.image[0].buffer,
      originalname: files?.image[0].originalname
    },
    image_desc: req.body.imageDesc,
    pronunciation: {
      mimetype: files?.pronunciation[0].mimetype,
      buffer: files?.pronunciation[0].buffer,
      originalname: files?.pronunciation[0].originalname
    }
  }).run(connection, (err, result) => {
    if (err) throw err
    console.log(JSON.stringify(result, null, 2))
    res.send("success!")
  })
})

app.use((req, res) => {
  res.sendFile(join(__dirname, "..", "..", "build", "index.html"))
})

app.listen(port, () => {
  console.log("listening on port " + port)
  r.connect({
    host: 'localhost',
    port: 28015
  }, function (err, conn) {
    if (err) throw err
    connection = conn
    console.log("connected to rethinkDB!")
  })
})


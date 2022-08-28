const express = require("express")
const multer = require('multer')
const cors = require('cors')

const app = express()

app.use(cors())

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname)
  }
})

const upload = multer({storage: fileStorageEngine})

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/Activity2.html')
})

app.post("/register", upload.single("image"),(req, res) => {
  console.log(req.file)
  res.send("Single file upload success")
})



app.listen(5000)

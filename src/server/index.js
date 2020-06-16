var path = require('path')
const express = require('express')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const projectData = { url: 'https://en.wikipedia.org/wiki/Wolf' }

dotenv.config()
const textapi = new aylien({ application_id: process.env.API_ID, application_key: process.env.API_KEY })

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.post('/addArticle', function (req, res) {
  projectData.url = req.body.url
})

app.get('/getAnalysis', function (req, res) {
  textapi.sentiment({
    url: projectData.url
  }, function (error, response) {
    if (error === null) {
      res.send(response)
    }
  })
})

module.exports = app

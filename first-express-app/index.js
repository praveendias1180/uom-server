const express = require('express')
const db = require('./database')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => console.log('Listening on PORT 3000...'))
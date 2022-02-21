require('dotenv').config();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Rest server')
})

app.listen(process.env.PORT, ()=>{
    console.log('Server running at', process.env.PORT)
})
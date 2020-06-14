const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  res.send("Our api sercer is working correctly")
})

app.listen(3000, ()=> {
  console.log("Started api service")
})

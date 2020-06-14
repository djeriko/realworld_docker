const express = require("express")
const mongoose = require('mongoose')
const { connectDb } = require("./helpers/db")
const { host, port, db } = require("./configuration")
const app = express()

// Create mongoose schema
const postSchema = new mongoose.Schema({
  name: String
})
const Post = mongoose.model("Post", postSchema)

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port: ${port}`)
    console.log(`On host ${host}`)
    console.log(`Our database ${db}`)

    Post.find(function(err, posts) {
      if (err) return console.error(err)
      console.log('posts', posts)
    })

    // Create instance of schema
    const silence = new Post ({name: "Silence"})
    // Add to db
    silence.save(function(err, savedPosts) {
      if (err) return console.error(err)
      console.log('savedSilence', savedPosts)
    })
  })
  
}

app.get("/test", (req, res) => {
  res.send("Our api sercer is working correctly")
})

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer)

const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const http = require('http')

mongoose.connect('mongodb+srv://jvbeltra:CattleDetectorManager@clusterprovider.y8xlc.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority\n', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
const server = http.Server(app)

const routes = require('./routes.js')

// app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
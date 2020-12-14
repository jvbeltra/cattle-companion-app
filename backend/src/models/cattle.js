const mongoose = require('mongoose')

const CattleSchema = new mongoose.Schema({
    identifier: String,
    lastArea: String,
    lastSeen: String
})

module.exports = mongoose.model('Cattle', CattleSchema)

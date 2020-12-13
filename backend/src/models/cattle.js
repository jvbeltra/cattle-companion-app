const mongoose = require('mongoose')

const CattleSchema = new mongoose.Schema({
    identifier: String,
    lastArea: String,
    status: String,
    lastData: String
})

module.exports = mongoose.model('Cattle', CattleSchema)

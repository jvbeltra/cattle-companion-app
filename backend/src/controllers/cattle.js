const axios = require('axios')
const Cattle = require('../models/cattle.js')

module.exports = {
    async find(request, response) {
        const devs = await Cattle.find()

        return response.json(devs)
    },

    async create(request, response) {
        const {identifier, lastArea, lastSeen} = request.body

        let cattle = await Cattle.findOne({identifier});

        if (!cattle) {
            cattle = await Cattle.create({
                identifier,
                lastArea,
                lastSeen
            })
        }

        response.json(cattle)
    },

    async update(request, response) {
        const body = request.body

        let cattle = await Cattle.updateOne({_id: request.params.id}, body)

        response.json(cattle)
    },

    async delete(request, response) {
        let cattle = await Cattle.deleteOne({_id: request.params.id})

        response.json(cattle)
    },

    async findOne(request, response) {
        let cattle = await Cattle.findById(request.params.id)

        response.json(cattle)
    }
}

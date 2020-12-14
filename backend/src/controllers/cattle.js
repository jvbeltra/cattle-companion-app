const axios = require('axios')
const Cattle = require('../models/cattle.js')

module.exports = {
    async find(request, response) {
        const cattle = await Cattle.find()

        return response.json(cattle)
    },

    async create(request, response) {
        const {identifier, lastArea, lastSeen} = request.body

        let cattle = await Cattle.findOne({identifier});
        let status = 200;

        if (!cattle) {
            cattle = await Cattle.create({
                identifier,
                lastArea,
                lastSeen
            })
            status = 201;
        } else {
            status = 409
        }

        response.status(status).send(cattle)
    },

    async update(request, response) {
        const body = request.body

        let cattle = await Cattle.updateOne({_id: request.params.id}, body)

        response.status(204).send(cattle)
    },

    async delete(request, response) {
        let cattle = await Cattle.deleteOne({_id: request.params.id})

        response.status(204).send(cattle)
    },

    async findOne(request, response) {
        let cattle = await Cattle.findById(request.params.id)

        response.status(204).send(cattle)
    }
}

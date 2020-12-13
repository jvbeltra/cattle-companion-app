const axios = require('axios')
const Cattle = require('../models/cattle.js')

module.exports = {
    async index(request, response) {
        const devs = await Cattle.find()

        return response.json(devs)
    },

    async store(request, response) {
        const {identifier} = request.body

        let cattle = await Cattle.findOne({identifier});

        if (!cattle) {
            cattle = await Cattle.create({
                identifier,
                lastArea: "",
                status: ""
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

    async indexOne(request, response) {
        let cattle = await Cattle.findById(request.params.id)

        response.json(cattle)
    }
}

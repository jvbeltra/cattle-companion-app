const { Router } = require('express')
const CattleController = require('./controllers/cattle.js')

const routes = Router()

routes.get('/cattle', CattleController.find)
routes.get('/cattle/:id', CattleController.findOne)
routes.delete('/cattle/:id', CattleController.delete)
routes.post('/cattle', CattleController.create)
routes.patch('/cattle/:id', CattleController.update)

module.exports = routes
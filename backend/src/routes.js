const { Router } = require('express')
const DevController = require('./controllers/cattle.js')
const SearchController = require('./controllers/search.js')

const routes = Router()

routes.get('/cattle', DevController.index)
routes.get('/cattle/:id', DevController.indexOne)
routes.delete('/cattle/:id', DevController.delete)
routes.post('/cattle', DevController.store)
routes.patch('/cattle/:id', DevController.update)

module.exports = routes
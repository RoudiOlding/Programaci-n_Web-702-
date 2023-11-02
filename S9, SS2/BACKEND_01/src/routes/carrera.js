import express from 'express'

import carreraController from '../controllers/carrera.js'

const routes = express.Router()

routes.get('/', carreraController.findAll ) // localhost:3001/carrera
routes.post('/', carreraController.create )
routes.get('/:id', carreraController.findOne )
routes.put('/', carreraController.update )
routes.delete('/:id', carreraController.remove)

export default routes
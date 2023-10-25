import express from 'express'

import alumnoController from '../controllers/alumno.js'

const routes = express.Router()

routes.get('/', alumnoController.findAll ) // localhost:3001/alumno
routes.post('/', alumnoController.create )
routes.get('/:id', alumnoController.findOne )
routes.put('/', alumnoController.update )
routes.delete('/:id', alumnoController.remove)

export default routes
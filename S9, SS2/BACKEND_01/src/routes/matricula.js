import express from 'express'

import matriculaController from '../controllers/matricula.js'

const routes = express.Router()

routes.get('/', matriculaController.findAll ) // localhost:3001/docente
routes.post('/', matriculaController.create )
routes.get('/:id', matriculaController.findOne )
routes.put('/', matriculaController.update )
routes.delete('/:id', matriculaController.remove)

export default routes
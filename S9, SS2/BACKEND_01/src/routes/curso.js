import express from 'express'

import cursoController from '../controllers/curso.js'

const routes = express.Router()

routes.get('/', cursoController.findAll ) // localhost:3001/alumno
routes.post('/', cursoController.create )
routes.get('/:id', cursoController.findOne )
routes.put('/', cursoController.update )
routes.delete('/:id', cursoController.remove)

export default routes
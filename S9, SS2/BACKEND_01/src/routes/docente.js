import express from 'express'
import docenteControler from '../controllers/docente.js'

const routes = express.Router()

routes.get("/", docenteControler.findAll ) //localhost: 30001/docentes
routes.post('')

export default routes

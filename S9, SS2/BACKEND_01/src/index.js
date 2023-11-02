import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import docenteRoutes from './routes/docente.js'
import alumnoRoutes from './routes/alumno.js'
import cursoRoutes from './routes/curso.js'
import carreraRoutes from './routes/carrera.js'
import matriculaRoutes from './routes/matricula.js'

var app = express(); // Creando nuestro aplicativo
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({result: 'OK'})
}) //"get" el verbo http para recibir datos, "post" enviar datps "put"  actualizar datos"delete" eliminar datos

app.use("/docente", docenteRoutes);
app.use("/alumno", alumnoRoutes);
app.use("/curso", cursoRoutes);
app.use("/carrera", carreraRoutes);
app.use("/matricula", matriculaRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.') //Esto, solo escucha, pero cómo recibimos las peticiones (?)
}) //En que puerto va a escuchar, lo que quremos que salga cuando corrra el aplicativo
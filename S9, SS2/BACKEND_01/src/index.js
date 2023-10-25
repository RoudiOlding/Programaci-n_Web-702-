import express, { response } from 'express';
import bodyParser from 'body-parser';

import docenteRoutes from './routes/docente.js'
import alumnoRoutes from './routes/alumno.js'

var app = express(); // Creando nuestro aplicativo
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({result: 'OK'})
}) //"get" el verbo http para recibir datos, "post" enviar datps "put"  actualizar datos"delete" eliminar datos

app.use("/docente", docenteRoutes);
app.use("/alumno", alumnoRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.') //Esto, solo escucha, pero cómo recibimos las peticiones (?)
}) //En que puerto va a escuchar, lo que quremos que salga cuando corrra el aplicativo
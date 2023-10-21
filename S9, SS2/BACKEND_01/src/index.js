import express, { response } from 'express';
import docenteRoutes from './routes/docente.js'

var app = express(); // Creando nuestro aplicativo

app.get('/', (req, res) => {
    return res.json({result: 'OK'})
}) //"get" el verbo http para recibir datos, "post" enviar datps "put"  actualizar datos"delete" eliminar datos

app.use("/docente", docenteRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.') //Esto, solo escucha, pero cómo recibimos las peticiones (?)
}) //En que puerto va a escuchar, lo que quremos que salga cuando corrra el aplicativo
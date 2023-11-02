import { useState } from 'react'
import carreraApi from '../../api/carrera.js'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'

import carreraApi from '../../api/carrera.js'
import alumnoApi from '../../api/alumno.js'
import cursoApi from '../../api/curso.js'


const Matricula = () => {

    const [carreras, setCarreras] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [carreraId, setCarreraId] = useState(1);
    const [alumnoId, setAlumnoId] = useState(1);
    const [cursosMatriculados, setCursosMatriculados] = useState([]);
    
    const handleOnLoad = async () => {
        const rawCarreras = await carreraApi.findAll();
        const rawAlumnos = await alumnoApi.findAll();
        const rawCursos = await cursoApi.findAll();

        setCarreras(rawCarreras.data);
        setAlumnos(rawAlumnos.dat);
        setCursos(rawCursos.data);
    }

    const handleAgregarCursos = () => {
        setCursosMatriculados([... {id: cursoId}])
    }

    useEffect(() => {
        const getCarreras = async () => {
            const resp = await carreraApi.findAll();
            setCarreras(resp);
            console.log(resp)
        }

        getCarreras();
    })
    
    return(
        <h1>Registro de Matricula</h1>

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={carreraId}
                label="Carrera"
                onChange={handleonCarreraChange}
            >
                {carreras.map(item => {
                    return (<menuItem value={item.id}>{item.nombre}</menuItem>)
                })}
                
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={alumnoId}
                label="Carrera"
                onChange={e => setAlumnoId(e.target.value)}
            >
                {carreras.map(item => {
                    return (<menuItem value={item.id}>{item.nombre + " " + item.apellido}</menuItem>)
                })}
                
            </Select>
        </FormControl></>
    )
}

export default Matricula;
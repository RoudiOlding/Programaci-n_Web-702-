import docenteRepository from "../repository/docente.js";

const findAll = (req, res) => {
    
    const docentes = docenteRepository.findAll();

    return res.status(200).json(docentes)
}

const create = (req, res) => {
    
}


const docenteControler = { findAll }

export default docenteControler; 

//Definiendo el controlador, el que lidiara con todas las respuestas y peticiones
//cuando hay un request, el se encarga de hacerlo todo
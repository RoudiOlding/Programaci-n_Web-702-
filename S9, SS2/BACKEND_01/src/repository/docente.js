import docenteControler from "../controllers/docente.3";

let docentes = [{
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    curso: "Programacion web"
},{
    id: 2,
    nombre: "Sandra",
    apellido: "Sanchez",
    curso: "Derecho Penal"
}]

const findAll = () => {
    return docentes;
}

const create = (docente) => {
    docente.push(docente)
    return docente;
}

const docenteRepository = { findAll }

export default docenteRepository;
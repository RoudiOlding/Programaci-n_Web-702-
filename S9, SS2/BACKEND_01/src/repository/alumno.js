let alumnos = [{
    nombre:"Camila",
    apellido: "Raez",
    id: 20210652,
    carrera: "artes especiales"
},{
    nombre: "Roudi",
    apellido: "Olding",
    id: 20350652,
    carrera: "carrera normal"
}]

const findAll = () => {
    return alumnos;
}

const create = (alumno) => {
    alumnos.push(alumno)
    return alumno;
}

const findOne = (id) => {
    const result = alumnos.find(x => x.id == id);
    return result;
}

const update = (alumno) => {
    const index = alumnos
        .findIndex(item => item.id === alumno.id);

    if (index > -1) {
        alumnos[index] = alumno;
        return alumno;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = alumnos.findIndex(item => item.id == id);

    if (index > -1) {
        alumnos.splice(index,1);
        return true;
    } else  
        return false;

}

const alumnoRepository = { findAll, create, findOne, update, remove }

export default alumnoRepository;
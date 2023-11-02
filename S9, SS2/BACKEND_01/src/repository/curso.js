let cursos = [{
    id: 1,
    nombre: "Programación web",
    creditos: 5,
    carrera : { id : 1} //Sistemas
},{
    id: 2,
    nombre: "Arquitectura de Software",
    creditos: 5,
    carrera : { id : 1} //Sistemas
},{
    id: 3,
    nombre: "Derecho Ambiental",
    creditos: 5,
    carrera : { id : 2} //Derecho
},{
    id: 4,
    nombre: "Derecho Administrativo",
    creditos: 5,
    carrera : { id : 2} //Derecho
}]

const findAll = () => {
    return cursos;
}

const create = (curso) => {
    cursos.push(curso)
    return cursos;
}

const findOne = (id) => {
    const result = cursos.find(x => x.id == id);
    return result;
}

const update = (curso) => {
    const index = cursos
        .findIndex(item => item.id === curso.id);

    if (index > -1) {
        cursos[index] = curso;
        return curso;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = cursos.findIndex(item => item.id == id);

    if (index > -1) {
        cursos.splice(index,1);
        return true;
    } else  
        return false;

}

const cursoRepository = { findAll, create, findOne, update, remove }

export default cursoRepository;
const fechaHoy = new Date()

let matriculas = [{
    id: 1,
    fechaMatricula: fechaHoy,
    alumno: { id: 1},
    carrera: { id: 1},
    cursos: [{
        id: 1
    }, { id: 2}]
}]

const findAll = () => {
    return matriculas;
}

const create = (matricula) => {
    matriculas.push(matricula)
    return matricula;
}

const findOne = (id) => {
    const result = matriculas.find(x => x.id == id);
    return result;
}

const update = (matricula) => {
    const index = matriculas
        .findIndex(item => item.id === matricula.id);

    if (index > -1) {
        matriculas[index] = matricula;
        return matricula;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = matriculas.findIndex(item => item.id == id);

    if (index > -1) {
        matriculas.splice(index,1);
        return true;
    } else  
        return false;

}

const matriculaRepository = { findAll, create, findOne, update, remove }

export default matriculaRepository;
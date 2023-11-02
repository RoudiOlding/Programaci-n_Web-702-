let carreras = [{
    id: 1,
    nombre: "Ingenieria de Sistemas"
},{
    id: 2,
    nombre: "Derecho"
}]

const findAll = () => {
    return carreras;
}

const create = (carrera) => {
    carreras.push(carrera)
    return carrera;
}

const findOne = (id) => {
    const result = carreras.find(x => x.id == id);
    return result;
}

const update = (carrera) => {
    const index = carreras
        .findIndex(item => item.id === carrera.id);

    if (index > -1) {
        carreras[index] = carrera;
        return carrera;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = carreras.findIndex(item => item.id == id);

    if (index > -1) {
        carreras.splice(index,1);
        return true;
    } else  
        return false;

}

const carreraRepository = { findAll, create, findOne, update, remove }

export default carreraRepository;
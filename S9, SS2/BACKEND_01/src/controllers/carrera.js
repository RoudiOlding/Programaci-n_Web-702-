import carreraRepository from "../repository/carerra.js";

const findAll = (req,res) => {

    const carreras = carreraRepository.findAll();

    return res.status(200).json(carreras);

}

const create = (req,res) => {
    const result = carreraRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = carreraRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = carreraRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
carreraRepository
    const result = carreraRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const carreraController = { findAll, create, findOne, update, remove }

export default carreraController;
//Definiendo el controlador, el que lidiara con todas las respuestas y peticiones
//cuando hay un request, el se encarga de hacerlo todo
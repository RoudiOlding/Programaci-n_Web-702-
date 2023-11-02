import matriculaRepository from "../repository/matricula.js";

const findAll = (req,res) => {

    const matriculas = matriculaRepository.findAll();

    return res.status(200).json(matriculas);

}

const create = (req,res) => {
    const result = matriculaRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = matriculaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = matriculaRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;

    const result = matriculaRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const matriculaController = { findAll, create, findOne, update, remove }

export default matriculaController;
//Definiendo el controlador, el que lidiara con todas las respuestas y peticiones
//cuando hay un request, el se encarga de hacerlo todo
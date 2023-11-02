import cursoRepository from "../repository/curso.js";

const findAll = (req,res) => {

    const cursos = cursoRepository.findAll();

    return res.status(200).json(cursos);

}

const create = (req,res) => {
    const result = cursoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = cursoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = (req,res) => {
    const result = cursoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const remove = (req,res) => {
    const id = req.params.id;
    
    const result = cursoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encotrado.'})
}

const cursoController = { findAll, create, findOne, update, remove }

export default cursoController;
//Definiendo el controlador, el que lidiara con todas las respuestas y peticiones
//cuando hay un request, el se encarga de hacerlo todo
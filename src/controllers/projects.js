const Project = require('../models/Project')

//Get all projects
const getProjects = async (req, res) => {
    res.json("Get all projects")
}

//Post new project -> O que falta: Talvez, fazer a funcionalidade de upload imagem e gerar o url (posso fazer isso no front com Firebase)
const addProject = async (req, res) => {
    const { name, description, category, images } = req.body

    const newProject = new Project({
        name,
        description,
        category,
        images,
        thumb: images[0],
    })

    try {
        const data = await newProject.save()
        res.json({
            success: true,
            data: data
        })
    } catch (error) {
        res.json({
            success: false,
            data: error.message
        })
    }
}

//Get specific project :id - SE A ID NAO FOR ENCONTRADA
const getProject = async (req, res) => {
    console.log("Specific")
    res.json("Get specific project")
}

//Put specific project :id
const updateProject = async (req, res) => {
    res.json("Update specific project")
}

//Delete specific project :id
const deleteProject = async (req, res) => {
    res.json("Delete specific project")
}

module.exports = {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject
}
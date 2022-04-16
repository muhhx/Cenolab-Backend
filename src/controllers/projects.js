const Project = require('../models/Project')

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json({
            success: true,
            data: projects
        })
    } catch (error) {
        res.json({
            success: false,
            data: error.message
        })
    }
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
        res.status(200).json({
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

const getProject = async (req, res) => {
    try {
        const { projectId } = req.params
        const project = await Project.findById(projectId)
        res.status(200).json({
            success: true,
            data: project
        })
    } catch (error) {
        res.json({
            success: false,
            data: error.message
        })
    }
}

const updateProject = async (req, res) => {
    try {
        const { projectId } = req.params
        const data = await Project.findOneAndUpdate({_id: projectId}, req.body, {
            new: true,
            runValidators: true
        })

        if(!data) {
            return res.status(404).json({
                success: false,
                data: `No data with Id: ${projectId}, 404`
            })
        }

        res.status(200).json({
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

const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params
        const data = await Project.findByIdAndDelete(projectId)
        if(!data) {
            return res.status(404).json({
                success: false,
                data: `No data with Id: ${projectId}, 404`
            })
        }
        res.status(200).json({
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

module.exports = {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject
}
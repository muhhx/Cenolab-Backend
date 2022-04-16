const Project = require('../models/Project')

//Get all projects
const getProjects = async (req, res) => {
    res.json("Get all projects")
}

//Post new project
const addProject = async (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        thumb: "randomUrl",
        images: ["um"]
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

//Get specific project :id
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
const Project = require('../models/Project')

const getHome = async (req, res) => {
    try {
        const projects = await Project.find({homePage: true})
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

module.exports = { getHome }
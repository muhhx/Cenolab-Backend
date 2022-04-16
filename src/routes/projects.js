const router = require('express').Router()
const {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject,
} = require('../controllers/projects')

router.route("/").get(getProjects).post(addProject)
router.route("/:projectId").get(getProject).put(updateProject).delete(deleteProject)

module.exports = router

const router = require('express').Router()
const {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject,
} = require('../controllers/projects')

router.get("/", getProjects)

router.post("/", addProject)

router.get("/:projectId", getProject)

router.put("/:projectId", updateProject)

router.delete("/:projectId", deleteProject)

module.exports = router

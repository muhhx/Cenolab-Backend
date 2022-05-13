const router = require('express').Router()
const {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject,
} = require('../controllers/projects')
const authorizationMiddleware = require('../middleware/authorizationMiddleware')


router.get("/", getProjects)
router.post("/", authorizationMiddleware, addProject)
router.get("/:projectId", getProject)
router.put("/:projectId",authorizationMiddleware, updateProject)
router.delete("/:projectId", authorizationMiddleware, deleteProject)

module.exports = router

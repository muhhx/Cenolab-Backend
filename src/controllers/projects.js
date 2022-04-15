
const getProjects = async (req, res) => {
    res.json("Get all projects")
}

const addProject = async (req, res) => {
    res.json("Post new project")
}

const getProject = async (req, res) => {
    console.log("Specific")
    res.json("Get specific project")
}

const updateProject = async (req, res) => {
    res.json("Update specific project")
}

const deleteProject = async (req, res) => {
    res.json("Delete specific project")
}

//api/v1/projects/ - getProjects                       GET (Pegar todos os projetos do portfólio) -- db.filter()
//api/v1/projects/ - addProject                       POST (Adicionar projeto)
//api/v1/projects/:projectId - getProject            GET (Pegar algum projeto em específico) -- db.filter(_id === projectId)
//api/v1/projects/:projectId - updateProject             PUT (Editar propriedades de um projeto especifico -- para aparecer na home, mudar nome, fotos, etc)
//api/v1/projects/:projectId - deleteProject             DELETE (Deletar projeto específico)
//api/v1/projects/home - getHome                   GET (Pegar os projetos que aparecerão na home) -- db.filter(homePage === true)
//api/v1/projects/category - getCategories               GET (Pega todos os projetos, separados em sua respectiva categoria) 
//api/v1/projects/category/:categoryId - getCategory   GET (Pegar todos os projetos de determinada categoria) -- db.filter(category === categoryId) -- Mandar apenas 6 projetos no maximo por conta do front

module.exports = {
    getProjects,
    addProject,
    getProject,
    updateProject,
    deleteProject
}
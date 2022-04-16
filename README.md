if(homePage === true) {
    arr.push(currentProject) //A ordem que os projetos aparecerão na homePage será definida nessa array
}

Na adminPage, o admin terá uma lista flex column com todos os projetos e com as opções, à direita da página, para editar e deletar os projetos
No começo, terá uma opção para adicionar um projeto

Na pagina de admin, fazer uma sessão para mostrar quais projetos estão sendo mostrados na home (puxar da api /home) e add opção para mudar projeto
    -> Fazer requisição para update projeto atual para false e mudar projeto novo pra true


//api/v1/projects/ - getProjects                       GET (Pegar todos os projetos do portfólio) -- db.filter()
//api/v1/projects/ - addProject                       POST (Adicionar projeto)
//api/v1/projects/:projectId - getProject            GET (Pegar algum projeto em específico) -- db.filter(_id === projectId)
//api/v1/projects/:projectId - updateProject             PUT (Editar propriedades de um projeto especifico -- para aparecer na home, mudar nome, fotos, etc)
//api/v1/projects/:projectId - deleteProject             DELETE (Deletar projeto específico)
//api/v1/projects/home - getHome                   GET (Pegar os projetos que aparecerão na home) -- db.filter(homePage === true)
//api/v1/projects/category - getCategories               GET (Pega todos os projetos, separados em sua respectiva categoria) 
//api/v1/projects/category/:categoryId - getCategory   GET (Pegar todos os projetos de determinada categoria) -- db.filter(category === categoryId) -- Mandar apenas 6 projetos no maximo por conta do front


Entreterimento > 13
Social > 4
Formaturas > 0 (tem o texto de cada categoria)
Coorporativo / Marcas > 5
Arquiteura Comercial > 6

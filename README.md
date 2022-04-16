//api/v1/projects/                       GET (Pegar todos os projetos do portfólio) -- db.filter()
//api/v1/projects/                       POST (Adicionar projeto)
//api/v1/projects/:projectId             GET (Pegar algum projeto em específico) -- db.filter(_id === projectId)
//api/v1/projects/:projectId             PUT (Editar propriedades de um projeto especifico -- para aparecer na home, mudar nome, fotos, etc)
//api/v1/projects/:projectId             DELETE (Deletar projeto específico)
//api/v1/projects/home                   GET (Pegar os projetos que aparecerão na home) -- db.filter(homePage === true)
//api/v1/projects/category               GET (Pega todos os projetos, separados em sua respectiva categoria) 
//api/v1/projects/category/:categoryId   GET (Pegar todos os projetos de determinada categoria) -- db.filter(category === categoryId) -- Mandar apenas 6 projetos no maximo por conta do front

//Quantidade de projetos para cada categoria
Entreterimento > 13
Social > 4
Formaturas > 0 (tem o texto de cada categoria)
Coorporativo / Marcas > 5
Arquiteura Comercial > 6

//Regras para add projetos
- Voce nao vai poder substituir, deletar, adicionar imanges em uma array de imagens do banco de dados, porem voce pode substituir a thumbImage. Se voce quiser substituir uma imagem, deleta todo o projeto e cria um novo
- ENTAO, é recomendado você ja ter todas as imagens que voce quer usar, preparadas
- (porem voce pode atualizar nome, categoria, descrição, homePage, thumbImage)
- Quando voce cria, a thumb image vai ser automaticamente a primeira imagem da array, porem voce pode atualizar a thumb image depois

//Criar Projeto
- É impossível você criar um projeto:
    - Sem, no mínimo, 1 imagem;
    - Sem preencher todos os campos (name, description, category, images);
    - Enviando a category errada

//Pagina de admin
- PÁGINA DE ADMIN
    - Update homeProjects (selecionar apenas os que aparecerao na home + botao para confirmar mudanças -> Duas axios calls no front, uma mudando o currentObject pra false e a outra mudando o novo item para true)
    - Lista de projetos (mostrar bonitinho as infos com thumb image + botao pra editar)
        - PÁGINA PARA EDITAR PROJETO ESPECIFICO
    - Add projeto
        - PÁGINA PARA ADD PROJETO


SE VOCE SO MANDAR O FIELD Q VC QUER FAZER O UPDATE, ELE SO VAI FAZER O UPDATE NAQUELE FIELD!!! N PRECISO MANDAR INFOS DESNECESSARIAS NO REQUEST!!!!!!!
<h1>CenoLAB (Client side)</h1>
<a align="center" href="https://cenolab.com.br/">Clique aqui para acessar a API do projeto (Server side).</a>
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-Murilo%20Santos-231f20?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/giovannalinda)](https://www.linkedin.com/in/muhhx) 
[![Gmail Badge](https://img.shields.io/badge/-muriloue@gmail.com-231f20?style=flat-square&logo=Gmail&logoColor=white&link=mailto:muriloue@gmail.com)](mailto:muriloue@gmail.com)

</div>
<p align="center">
    <a href="#Sobre">Sobre</a> - 
    <a href="#Preview">Preview</a> - 
    <a href="#Funcionalidades">Funcionalidades</a> - 
    <a href="#Tecnologias">Tecnologias</a> - 
    <a href="#Instalar">Instalar</a>
</p>

## Sobre
<a href="https://cenolab.com.br/">Clique aqui para acessar o site (cenolab.com.br).</a>
<p>Site institucional para empresa de arquitetura/cenografia, usando Typescript, React.js, Node.js, MongoDB e Firebase. Página de administrador com autenticação e UI intuitiva para editar o portfólio.</p>

## Preview


## Funcionalidades
O que falta atualizar:
- [ ] Redirecionar para redes sociais footer
- [x] Autenticação (Firebase)
    - [x] Página de login
    - [ ] Dashboard
        - [ ] Página de administrador com UI intuitiva
        - [ ] Funcionalidade Adicionar/deletar item portfólio
        - [x] Funcionalidade Controlar manutenção 
        - [ ] Funcionalidade Controlar 2 itens do portfólio no front-end
        - [x] Funcionalidae Logout
- [ ] Página de Projetos
- [ ] Página de Projeto
- [x] Página 404
- [ ] Página de Contato
- [x] Página de Manutenção
- [ ] Fazer formulário
- [ ] Mudar Firebase para production e avisar no readme

Como organizar os dados front end:
- fAzer context api pegando todos os itens do portfolio
- No mesmo context, verificar se o item possui initialPage = true. Caso sim, separar numa array de 2 items que serão consumidos na home
- Para cada item, tambem verificar a categoria do item e jogar o item pra uma array com todos os itens da mesma categoria

## Tecnologias
- Vite
- Typescript
- React.js
- Styled-components
- React Hooks
- Context API
- React Router Dom v6.
- Firebase
- Node.js
- MongoDB

## Instalar
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
    <a href="https://git-scm.com">Git</a> e <a href="https://nodejs.org/en/">Node.js</a>. 
    Além disto, é bom ter um editor para trabalhar com o código como 
    <a href="https://code.visualstudio.com/">VSCode</a>.
</p>

```bash
# Clone este repositório
$ git clone <https://github.com/muhhx/Cenolab-Responsive-Website>

# Acesse a pasta do projeto no terminal/cd
$ cd Cenolab-Responsive-Website

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

<h4 align="center">Murilo Santos, 2022.✨™</h4>
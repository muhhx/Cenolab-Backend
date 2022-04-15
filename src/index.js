const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv/config')

//Variables
const categoriesRoutes = require('./routes/categories')
const projectsRoutes = require('./routes/projects')
const homeRoutes = require('./routes/home')
const port = process.env.PORT || 5000

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/v1/categories", categoriesRoutes)
app.use("/api/v1/projects", projectsRoutes)
app.use("/api/v1/home", homeRoutes)

//Connect to DB and Start server
app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})
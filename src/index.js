const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv/config')

//Variables
const projectsRoutes = require('./routes/projects')
const port = process.env.PORT || 5000

//Middlewares
app.use(express.json())
app.use(cors())
app.use("/api/v1/projects", projectsRoutes)


//Connect to DB and Start server
app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv/config')

//Variables
const categoriesRoutes = require('./routes/categories')
const projectsRoutes = require('./routes/projects')
const homeRoutes = require('./routes/home')
const connectDatabase = require('./db/connect')
const port = process.env.PORT || 5000
const mongodb = process.env.MONGO_URI

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/v1/categories", categoriesRoutes)
app.use("/api/v1/projects", projectsRoutes)
app.use("/api/v1/home", homeRoutes)

//Connect to DB and Start server
const start = async () => {
    try {
        await connectDatabase(mongodb)
        console.log("Connected to the Database!")
        app.listen(port, () => {
            console.log(`Running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv/config')

//Variables
const categoriesRoutes = require('./routes/categories')
const projectsRoutes = require('./routes/projects')
const loginRoutes = require('./routes/login')
const homeRoutes = require('./routes/home')
const emailRoutes = require('./routes/email')

const connectDatabase = require('./db/connect')
const notFoundMiddlware = require('./middleware/notFoundMiddleware')

const port = process.env.PORT || 5000
const mongodb = process.env.MONGO_URI

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

//Routes
app.use("/api/v1/categories", categoriesRoutes)
app.use("/api/v1/projects", projectsRoutes)
app.use("/api/v1/login", loginRoutes)
app.use("/api/v1/email", emailRoutes)
app.use("/api/v1/home", homeRoutes)
app.use(notFoundMiddlware)

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

//Get home page projects
const getHome = async (req, res) => {
    console.log("Home")
    res.json("Home page projects")
}

module.exports = { getHome }
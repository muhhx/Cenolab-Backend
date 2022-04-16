//Get all projects categorized
const getCategories = async (req, res) => {
    res.json("Get all projects categorized")
}

//Get all projects from a specific category
const getCategory = async (req, res) => {
    res.json("Get all projects from a specific category")
}

module.exports = {
    getCategories,
    getCategory
}
const Project = require('../models/Project')

const getCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        const data = await Project.find({category: categoryId})

        if(data.length === 0) {
            return res.status(404).json({
                success: false,
                data: `No category with Name: ${categoryId}, 404`
            })
        }
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.json({
            success: false,
            data: error.message
        })
    }
}

module.exports = {
    getCategory
}
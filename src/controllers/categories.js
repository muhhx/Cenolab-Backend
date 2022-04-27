const arraySlicer = require('../utils/arraySlicer')
const Project = require('../models/Project')

const getCategory = async (req, res) => {
    try {
        const categories = ["Entreterimento", "Social", "Coorporativo", "Comercial", "Formaturas"]
        let finalArray = {}

        for(let i = 0; i < categories.length; i++) {
            const data = await Project.find({category: categories[i]})
            const arraySliced = arraySlicer(6, data)
            finalArray[categories[i]] = arraySliced
        }

        res.status(200).json({
            success: true,
            data: finalArray
        })
    } catch (error) {
        res.json({
            success: false,
            data: error.message
        })
    }
}

module.exports = getCategory
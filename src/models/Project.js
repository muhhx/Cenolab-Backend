const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Informe o nome do projeto"]
    },
    description: {
        type: String,
        required: [true, "Informe a descrição do projeto"]
    },
    category: {
        type: "String",
        enum: ["Entreterimento", "Social", "Formaturas", "Coorporativo", "Comercial"],
        required: [true, "Informe a categoria correta do projeto"]
    },
    homePage: {
        type: Boolean,
        default: false
    },
    thumb: {
        type: String
    },
    images: {
        type: [String],
        required: true,
        validate: {
            validator: value => value.length >= 1,
            message: "No mínimo uma imagem!"
        }
    }
})

module.exports = mongoose.model("Project", ProjectSchema)

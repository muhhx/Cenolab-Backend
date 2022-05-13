const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body

    if(email !== process.env.AUTH_EMAIL || password !== process.env.AUTH_PASSWORD)
        return res.status(400).json({ success: false, message: "Usuário não existe"})

    const token = jwt.sign({email}, process.env.JWT_SIGNATURE)
    res.status(200).json({ success: true, token })
}

module.exports = login
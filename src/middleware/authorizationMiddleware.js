const jwt = require('jsonwebtoken')

const authorizationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader)
        return res.status(401).json({ error: "No token provided." })

    const parts = authHeader.split(' ')

    if(!parts.length === 2)
        return res.status(401).json({ error: "Invalid token." })
    
    const [ scheme, token ] = parts    
    
    jwt.verify(token, process.env.JWT_SIGNATURE, (err, decoded) => {
        if(err) return res.status(401).json({ error: "Token invalid." })

        return next()
    })
}

module.exports = authorizationMiddleware
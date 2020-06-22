const jwt = require('jsonwebtoken')

exports.verifycaToken = function (req, res, next) {
    const authorization = req.headers['authorization']

    if(!authorization) {
        return res.status(401).json({ ok:false, mensaje: "Credenciales erroneas" })
    }

    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'No tiene autorización',
                errors: err
            })
        }

        // En: decoded tengo la información del usuario que ha realizado la llamada
        // lo estoy añadiendo al req, con lo cual puedo identificar a la persona que ha relizado la llamada.
        req.usuario = decoded.usuario

        next()
    })

    
}
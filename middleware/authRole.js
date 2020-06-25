const Usuario = require('../Models/usuarios')

exports.authRole = async (req, res, next) => {
    let usuarioRes = await Usuario.find({ email: req.usuario.email })
    let usuario = usuarioRes[0]

    if (!usuario || usuario.rol !== 'administrador') {
        return res.status(401).json({
            message: `${req.usuario.nombre}: queda registrado su intento de intrusón`}
        )
    }

    next()
}
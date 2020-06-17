const { Router } = require('express')
const router = Router()
var Usuario = require('../Models/usuarios')

//===================================================
// Login: envia email y password y obtiene un token
//===================================================
router.post('', async (req, res) => {
    const { email, password } = req.body
 
    try {
        const usuarioDB = await Usuario.findOne({ email: email })

        // res.status(200).json({ passwordDB: usuarioDB.password, password })

        if (usuarioDB.password === password) {
            usuarioDB.password = ''
            res.status(200).json({ usuarioDB })
        } else {
            res.status(200).json({ ok: false })
        }

    } catch (error) {
        res.status(404).json({ok: false, mensaje: 'Credenciales incorrectas', errors: error})
    }    
})

module.exports = router
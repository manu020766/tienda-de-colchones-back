const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Router } = require('express')
const router = Router()
const Usuario = require('../Models/usuarios')

//===================================================
// Login: envia email y password y obtiene un token
//===================================================
router.post('', async (req, res) => {
    const { email, password } = req.body

    try {
        const usuarioDB = await Usuario.findOne({ email: email })

        if (await bcryptjs.compare(password, usuarioDB.password)) {
            let usuario = {
                id: usuarioDB._id,
                nombre: usuarioDB.nombre,
                email: usuarioDB.email,
                rol: usuarioDB.rol
            }

            const token = jwt.sign({ usuario }, process.env.SECRET, { expiresIn: 14400 })

            res.status(200).json({ ok: true, mensaje: 'Credenciales correctas', usuario, token})
        } else {
            res.status(200).json({ ok: false, mensaje: 'Credenciales incorrectas' })
        }

    } catch (error) {
        res.status(404).json({ ok: false, mensaje: 'Credenciales incorrectas'})
    }    
})

module.exports = router
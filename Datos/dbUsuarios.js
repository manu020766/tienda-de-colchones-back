const bcryptjs = require('bcryptjs')
const usuarios = [ 
    { nombre: 'tienda', email: 'tienda@tienda.es', password: '123456', rol: 'administrador'}, 
    { nombre: 'cliente1', email: 'cliente1@tienda.es', password: '123456', rol: 'cliente'}, 
    { nombre: 'cliente2', email: 'cliente2@tienda.es', password: '123456', rol: 'cliente2'}
  ]

  usuarios.forEach((usuario) => {
    usuario.password = bcryptjs.hashSync(usuario.password, 10)
  })

  module.exports = usuarios
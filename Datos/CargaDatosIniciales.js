const Usuario = require('../Models/usuarios')
const Producto = require('../Models/productos')
const DbUsuarios = require('./dbUsuarios')
const DbProductos = require('./dbProductos')

function cargarDatosIniciales(connection) {
    connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err)
        } else {
          if (names.length === 0) {
            Usuario.insertMany(DbUsuarios).then(function(){ 
                console.log("Usuarios insertados")  
              }).catch(function(error){ 
                console.log(error)
              })

              Producto.insertMany(DbProductos).then(function(){ 
                console.log("Productos insertados")  
              }).catch(function(error){ 
                console.log(error)
              })
          }
        }  
    })
}

module.exports = cargarDatosIniciales
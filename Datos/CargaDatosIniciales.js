const Usuario = require('../Models/usuarios')
const Producto = require('../Models/productos')
const DbUsuarios = require('./dbUsuarios')
const DbProductos = require('./dbProductos')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

function  cargarDatosIniciales(connection) {
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

            let origen, pathOrigen, destino, pathDestino, pathBorrar
            pathOrigen = path.resolve(__dirname, 'DatosImagenes')
            pathDestino = pathOrigen.slice(0, pathOrigen.indexOf('Datos')) +  path.sep + 'public' + path.sep + 'Upload'

            pathUpload = pathOrigen.slice(0, pathOrigen.indexOf('Datos')) + 'public' + path.sep + 'Upload'
            fse.emptyDirSync(pathUpload)

            DbProductos.forEach((p) => {
              origen = pathOrigen + path.sep + p.imagen
              destino = pathDestino + path.sep + p.imagen
        
              console.log('copiando: ', p.imagen)
              fs.createReadStream(origen).pipe(fs.createWriteStream(destino))
            })
          }
        }  
    })
}

module.exports = cargarDatosIniciales
const {Router} = require('express')
const routerProductos = require('./Producto')
const routerCategoria = require('./Categoria')
const mainRouter = Router()


mainRouter.get('/', (req,res) => res.status(200).send({message: 'Servidor Funcionando!'}))
mainRouter.use(routerProductos)
mainRouter.use(routerCategoria)

module.exports = mainRouter
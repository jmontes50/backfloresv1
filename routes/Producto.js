const {Router} = require('express');

const routerProductos = Router();

const {
  create,
  getProductoById,
  getProductos,
  updateProducto,
  deleteProducto
} = require('../controllers/Producto');

routerProductos.post('/productos', create);
routerProductos.get('/productos', getProductos);
routerProductos.get('/productos/:id', getProductoById);
routerProductos.put('/productos/:id',updateProducto);
routerProductos.delete('/productos/:id',deleteProducto)

module.exports = routerProductos;
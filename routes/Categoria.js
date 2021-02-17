const {Router} = require('express');

const routerCategoria = Router();

const {
  create,
  getCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria
} = require('../controllers/Categoria');

routerCategoria.post('/productos', create);
routerCategoria.get('/productos', getCategorias);
routerCategoria.get('/productos/:id', getCategoriaById);
routerCategoria.put('/productos/:id', updateCategoria);
routerCategoria.delete('/productos/:id', deleteCategoria);

module.exports = routerCategoria;
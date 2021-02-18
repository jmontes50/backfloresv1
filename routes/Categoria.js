const {Router} = require('express');

const routerCategoria = Router();

const {
  create,
  getCategorias,
  getCategoriaById,
  updateCategoria,
  deleteCategoria
} = require('../controllers/Categoria');

routerCategoria.post('/categorias', create);
routerCategoria.get('/categorias', getCategorias);
routerCategoria.get('/categorias/:id', getCategoriaById);
routerCategoria.put('/categorias/:id', updateCategoria);
routerCategoria.delete('/categorias/:id', deleteCategoria);

module.exports = routerCategoria;
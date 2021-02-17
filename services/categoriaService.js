const Categoria = require('../models/Categoria')

module.exports = {
  create: (body) => {
    const nuevaCategoria = new Categoria(body);
    return nuevaCategoria.save();
  },
  getCategoria: () => {
    return Categoria.find({active:true})
  },
  getCategoriaById: (id) => {
    return Categoria.findById(id);
  },
  updateCategoria: (categoria, body) => {
    let categoriaActualizado = {...categoria, ...body};
    return categoriaActualizado.save();
  }
}
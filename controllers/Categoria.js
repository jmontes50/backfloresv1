const categoriaService = require('../services/categoriaService');

module.exports = {
  create: async (req, res) => {
    try {
      const categoriaNueva = await categoriaService.create(req.body);
      res.status(201).send({
        ok:true,
        content:categoriaNueva
      })
    } catch (error) {
      res.status(409).send({
        ok:false,
        content:error
      })
    }
  },
  getCategorias: async(req, res) => {
    try{
      const categoria = await categoriaService.getCategoria();
      res.status(200).send({
        ok:true,
        content:categoria
      })
    }catch(error){
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  getCategoriaById: async(req, res) => {
    try {
      const categoria = await categoriaService.getCategoriaById(req.params.id);
      res.status(200).send({
        ok:true,
        content:categoria
      })
    } catch (error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  updateCategoria: async (req, res) => {
    try {
      const categoria = await categoriaService.getCategoriaById(req.params.id)
      const categoriaModificada = await categoriaService.updateCategoria(categoria, req.body)
      res.status(200).send({
        ok:true,
        content:categoriaModificada
      })
    } catch(error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  deleteCategoria: async (req, res) => {
    try {
      const categoria = await categoriaService.getCategoriaById(req.params.id)
      await categoriaService.updateCategoria(categoria, {active:false})
      res.status(200).send({
        ok:true,
        content:"Categoria Eliminada"
      })
    } catch(error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  }
}
const productoService = require('../services/productoService');

module.exports = {
  create: async (req, res) => {
    try {
      const productoNuevo = await productoService.create(req.body);
      res.status(201).send({
        ok:true,
        content:productoNuevo
      })
    } catch (error) {
      res.status(409).send({
        ok:false,
        content:error
      })
    }
  },
  getProductos: async(req, res) => {
    try{
      const productos = await productoService.getProductos();
      res.status(200).send({
        ok:true,
        content:productos
      })
    }catch(error){
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  getProductoById: async(req, res) => {
    try {
      const producto = await productoService.getProductoById(req.params.id);
      res.status(200).send({
        ok:true,
        content:producto
      })
    } catch (error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  updateProducto: async (req, res) => {
    console.log(req.params.id);
    try {
      const producto = await productoService.getProductoById(req.params.id)
      // console.log({producto});
      const productoModificado = await productoService.updateProducto(producto, req.body)
      res.status(200).send({
        ok:true,
        content:productoModificado
      })
    } catch(error) {
      console.log(error);
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  },
  deleteProducto: async (req, res) => {
    try {
      const producto = await productoService.getProductoById(req.params.id)
      await productoService.updateProducto(producto, {active:false})
      res.status(200).send({
        ok:true,
        content:"Producto Eliminado"
      })
    } catch(error) {
      res.status(404).send({
        ok:false,
        content:error
      })
    }
  }
}
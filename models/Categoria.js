const mongoose = require('mongoose')

const categoriaSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  active:{
    type:Boolean,
    default:true
  }
},{timestamps:true})

const Categoria = mongoose.model('Categorias', categoriaSchema)

module.exports = Categoria
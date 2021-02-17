const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  descripcion:{
    type:String,
    required:true
  },
  precio:{
    type:Number,
    required:true
  },
  stock:{
    type:Number,
    min:0
  },
  imagen:{
    type:String,
    default:"https://firebasestorage.googleapis.com/v0/b/codigoonline-ea7a1.appspot.com/o/picture-not-available.jpg?alt=media&token=e5d61d16-89c4-4d14-bbb7-cf27a4e06a8c"
  },
  categoria:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Categorias'
  },
  active:{
    type:Boolean,
    default:true
  }
},{timestamps: true})

const Producto = mongoose.model('Productos',productoSchema)

module.exports = Producto

const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
      version: "1.0.0",
      title: "API Flores",
      description: "Documentación API Flores"
  },
  host: "localhost:5000/api/v1",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
      {
          "name": "User",
          "description": "Endpoints"
      }
  ],
  definitions: {
      Categoria: {
          nombre: "Ofertas",
      },
      Productos: {
          nombre: "Rosas",
          descripcion: "Rosas Naturales para Delivery",
          precio:40,
          stock:10,
          imagen:"URL de imagen, por defecto imagen Not Available",
          categoria:"id_categoria"
          
      }
  }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/main.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js')
})
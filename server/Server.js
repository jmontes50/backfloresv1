const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mainRouter = require('../routes/main')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const app =  express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.options("*", cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/api/v1/', mainRouter)


module.exports = {app, PORT}
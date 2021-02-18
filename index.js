const {app, PORT} = require('./server/Server')
require('./database/atlas');

app.listen(PORT, err => {
  err ? console.error(error) : console.info(`Servidor ejecutandose en el puerto ${PORT}`)
})
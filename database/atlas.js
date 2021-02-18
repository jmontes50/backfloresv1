const mongoose = require('mongoose');

const BD_URI = "mongodb+srv://userb43:potato@clustertiendaapp.cvle1.mongodb.net/tiendadb?retryWrites=true&w=majority";

mongoose.connect(BD_URI, 
                {useNewUrlParser:true, useUnifiedTopology:true}, 
                (err) => err ? console.error(err) : console.log("BD Conectada")
)
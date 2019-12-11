const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-zjsqd.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da req

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

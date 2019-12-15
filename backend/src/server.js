const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const app = express();
const path = require('path');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-zjsqd.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da req

app.use(cors());
app.use(express.json());

// quando o usuario acessa "/files", usa o express.static, q é uma forma do express aderir-se de arquivos estaticos, como fotos por exemplo, para ele é passado o caminho dos arquivos estaticos
app.use('/files', express.static(path.resolve(__dirname, '..','uploads'))); 
app.use(routes);

app.listen(3333);

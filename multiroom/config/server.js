//Importar o módulo do framework do express
var express = require('express');

//Importar o módulo do consign 
var consign = require('consign');

//Importar o módulo do bodyParser
var bodyParser = require('body-parser');

//Importar o módulo do expressValidator
var expressValidator = require('express-validator');

//Iniciar o objeto do express
var app = express();

//Configurando o ejs como engine de views
//setar as variaveis 'view engine' e view do express
app.set('view engine','ejs');
app.set('views','./app/views');

//Configurando o middleware express.static
app.use(express.static('./app/public'));

//Configurar o middleware bodyParser
app.use(bodyParser.urlencoded({extended: true})); 

//Configurar o middleware expressValidator
app.use(expressValidator());

//Configurar o consign
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// Exportar o objeto app.
module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ShoppingList', {useNewUrlParser: true});

const port = process.env.PORT || 5000 ;

mongoose.connection.once('open',function(){
    console.log('Connection made,check port 5000');
}).on('error',function(error){
    console.log('Connection broken',error);
})

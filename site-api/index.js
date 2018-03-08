const express = require('express');
const personagensAnime = require('./dados/game.json');


const app = express();

app.get('/game', function(req, res){
    res.send(Game);
});


app.listen(3000, function(){
    console.log('Funfando...');
});
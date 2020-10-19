// Imports
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = {};
var fs = require('fs');

// Import do messageGame
var message = require('./messageGame');

// variaveis
var messageToClient = null;

/**
 * iniciando o Servidor
 */
app.get('/', function(req, res){
res.send('server is running');
});

/**
 * Funções quando estiver conectado ao Servidor
 */
io.on("connection", function (client) {  
    client.on("join", function(name){
    	console.log("Player Joined: " + name);
        
        
        //clients[client.id] = name;
        //client.emit("update", "You have connected to the server.");
        //client.broadcast.emit("update", name + " has joined the server.")
        
    });

    client.on("send", function(msg){
        console.log("Message: " + msg);
        var response = message.getWord(msg);
        //Limpar Arquivo
        //fs.writeFile("serverResponse.txt","");
        //Adiciona novo Dado
        fs.writeFile("serverResponse.txt",(response.message + ":" + response.option1 + ":" + response.option2),(err) => {
            if(err) throw err;
        });
        //client.broadcast.emit("chat", clients[client.id], msg);
    });

    client.on("disconnect", function(){
    	//console.log("Disconnect");
        io.emit("update", clients[client.id] + " has left the server.");
        delete clients[client.id];
    });
});

http.listen(3000, function(){
console.log('listening on port 3000');
});



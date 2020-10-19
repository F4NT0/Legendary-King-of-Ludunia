
// Objetos do Jogo
let welcome = {
    message: "Bem Vindo ao Jogo",
    option1: "start",
    option2: "cancelar"
}

//Variavel
let message;

function getResponseFromServer(msg){
    message = msg;

}

function getWord(word){
    return welcome;
}

// Exportar a Função getWord
exports.getWord = getWord;
exports.getMessage = getResponseFromServer;    

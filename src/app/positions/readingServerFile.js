var fs = require('fs');
var fileResult;

fs.readFile('serverResponse.txt',(err,data) => {
    if(err) throw err;
    this.fileResult = data.toString();
    console.log(this.fileResult);
    let valores = this.fileResult.split(":");
    console.log(valores[0]);
    console.log(valores[1]);
    console.log(valores[2]);
    
});
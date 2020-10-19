import { Injectable } from "@angular/core";
import * as io from "socket.io-client";


export const environment = {
  production: false,
  SOCKET_ENDPOINT: "http://localhost:3000",
};

@Injectable()
export class ServiceServiceService {
  socket;

  constructor() {}

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  public joinPlayer(name: String){
    this.setupSocketConnection();
    console.log(name);
    this.socket.emit("join", name);
  }
  public emitMessageProServ(message: String) {
    this.setupSocketConnection();
    console.log('Enviando para o Servidor: ',message);
    //Enviando ao Servidor o comando
    this.socket.emit("send", message);
    
  }

  private convert(text: String): any {
    var data = [];
    for (var i = 0; i < text.length; i++) {
      data.push(text.charCodeAt(i));
    }
    return text;
  }
}

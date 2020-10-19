import { Component, HostListener, OnInit } from '@angular/core';

// Internal
import * as history from '../commands/commands.component';

// Import Leitura do Arquivo do Servidor

//Primeng
import { InputTextModule } from 'primeng/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea/inputtextarea';
import { ServiceServiceService } from '../service/service-service.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit{
  // Variáveis
  enter: number = 0;
  entrada: string;
  service: ServiceServiceService;

  constructor() {
    this.service = new ServiceServiceService();
  }

  ngOnInit(){
    history.welcome(); //Inicio do Jogo
  }

  // Lidando com o Enter do Teclado
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.enter = event.keyCode;
    console.log(event.keyCode);
    if(this.enter == 13){ // 13 é o Enter do Teclado

      // Pega todos os dados do id entrada (input de comandos)
      let action = <HTMLInputElement>document.getElementById("entrada");

      // Enviar a ação para o Componente commands globalmente
      history.getAction(action.value);

      //Se for entrado um nome de jogador 1
      if(action.value.substr(0,9) == 'jogador1:'){
        this.definePlayer(action.value.substr(9,action.value.length));
      }
      //Se for entrado um nome de jogador 2
      if(action.value.substr(0,9) == 'jogador2:'){
        this.definePlayer(action.value.substr(9,action.value.length));
      }

      //Enviar ao Servidor
      this.sendMessage(action.value);

      //Pegando Resultado do Servidor

      action.value = null;
    }
  }

  public sendMessage(ms: string) {
    this.service.emitMessageProServ(ms);
  }

  public definePlayer(name: string){
    this.service.joinPlayer(name);
  }
}

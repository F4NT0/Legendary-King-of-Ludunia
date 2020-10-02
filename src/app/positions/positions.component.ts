import { Component, HostListener, OnInit } from '@angular/core';

// Internal
import * as history from '../commands/commands.component';

//Primeng
import { InputTextModule } from 'primeng/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea/inputtextarea';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit{
  // Variáveis
  enter: number = 0;
  entrada: string;
  
  constructor() {}

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
      
      action.value = null;
    }
  }
  
}
import { Component } from '@angular/core';

// MOVIMENTOS DO JOGADOR
import * as movements from '../movements/movements.component';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent{constructor(){}}

// Variaveis Globais
var action: string = null;
var heroName: string = null;
var vida: number = null;
var maxVida: number = null;
var heroSelection: number = 0; // 1 é o Azul e 2 é o Vermelho

/**
 * Método para pegar todas as Ações do Teclado com Enter
 * @param action1
 */
export function getAction(action1: string){
  action = action1;
  console.log(action);
  commandManager(action);
}

/**
 * Todos os Comandos possiveis no Jogo
 * @param option 
 */
function commandManager(option: string){
  //Definindo Nome do Jogador
  if(option.substr(0,5) == 'nome:'){
    console.log('Acessou Aqui');
    defineName(option);
  }
  
  //Comandos Disponiveis no jogo
  switch(option){
    case 'play' : {selection(option); break;}
    case 'cancelar': {welcome(); break;}
    
    // ESCOLHER PERSONAGEM
    case 'azul' : {selection(option); break;}
    case 'vermelho' : {selection(option); break;}

    // PRIMEIRA MISSÃO
    case 'inicio' : {moveTest(option); break;}
    case 'seguir reto' : {moveTest(option); break;}
    case 'voltar para fora' : {moveTest(option); break;}
    case 'lutar com mercenarios' : {moveTest(option); break;}
    case 'voltar a cidade' : {moveTest(option); break;}
    case 'voltar para dentro' : {moveTest(option); break;}

  }
}

/**
 * Mensagem Inicial do Programa
 */
export function welcome(){
  // Título
  let titulo = document.getElementById("tittle");
  titulo.style.color = 'gold';
  titulo.textContent = "Legendary King of Ludunia";

  //Reorientar os Jogadores
  movements.hero1begin();
  movements.hero2begin();

  // Mensagem
  let result = <HTMLInputElement>document.getElementById("textinfos");
  let welcome = "\n\n Ludunia já foi um dos grandes Reinos do Mundo de Vita, onde o povo vivia feliz e em Harmonia. \n\n Após anos de Tranquilidade, as Forças do Mal lideradas pelo Litch King, o grande Rei das Trevas, começou a se espalhar pelos Reinos, destruindo tudo pelo seu caminho. \n\n O Rei Ragnar, grande lider do Povo de Ludunia, juntou seu Exército e marchou para lutar contra o Grande Mal, onde após anos de luta conseguiu vencer o Exército Maldito, mas após vencer o inimigo, o Grande Rei Ragnar morre junto com o Litch King em Batalha, deixando a vida e seu trono sem Herdeiros e com a Coroa do Grande Rei desaparecida... \n\n Após se passar anos com o Regente no poder, se descobriu o paradeiro da Coroa, onde se encontra no centro de uma Masmorra no Território da Batalha onde foi Vencido o Grande Mal! \n\n Com essa Descoberta se começou uma Caçada pela Coroa, onde quem a possuir se tornará o Rei de Ludunia!!! \n\n [DIGITE PLAY PARA INICIAR O JOGO]!";
  result.style.fontSize = '17px';
  result.style.fontFamily = 'Time new Roman';
  result.value = welcome;

  // Opção 1
  let optionMessage = "play";
  let option = document.getElementById("option1");
  option.style.color = 'lightblue';
  option.textContent = optionMessage;

  // Opção 2
  let optionMessage2 = "cancelar";
  let option2 = document.getElementById("option2");
  option2.style.color = 'red';
  option2.textContent = optionMessage2;
}

/**
 * Seleciona qual Personagem Jogar
 * @param entrance 
 */
function selection(entrance: string){
  let result = <HTMLInputElement>document.getElementById("textinfos");
  let select = "\n[PRÓLOGO VERMELHO]\n\nApós a Descoberta da Localização da Coroa, o Rei Gandalf, que queria o Trono de Ludunia, Envia seu melhor Cavaleiro para recuperar a coroa, conhecido como o Cavaleiro Vermelho! \n\n\n[PRÓLOGO AZUL]\n\nO Regente de Ludunia, querendo proteger seu povo de outros Reinos envia o Chefe da Armada de Ludunia,que também é seu filho, para recuperar a coroa perdida, Ele é conhecido como Cavaleiro Azul \n\n\n Qual dos Dois Cavaleiros você deseja jogar?"
  result.value = select

  //Opção 1
  let optionMessage1 = "azul";
  let option1 = document.getElementById("option1");
  option1.textContent = optionMessage1;

  //Opção 2
  let optionMessage2 = "vermelho";
  let option2 = document.getElementById("option2");
  option2.textContent = optionMessage2;

  // Resposta
  if(entrance == 'azul'){
    let result = <HTMLInputElement>document.getElementById("textinfos");
    let mensagem = "Digite o Nome do seu Herói na Seguinte estrutura: \n\n nome:nomeHeroi \n\n"
    result.value = mensagem;
    heroSelection = 1;
  }else if(entrance == 'vermelho'){
    let result = <HTMLInputElement>document.getElementById("textinfos");
    let mensagem = "Digite o Nome do seu Herói na Seguinte estrutura: \n\n nome:nomeHeroi \n\n"
    result.value = mensagem;
    heroSelection = 2;
  }

  
}

/**
 * Define o Nome do Jogador
 * @param name 
 */
function defineName(name: string){
  let nomeHeroi = name.substring(5,name.length);
  let result = <HTMLInputElement>document.getElementById("textinfos");
  let saida = "\n[UPDATE]\n\nNome do Seu Herói é " + nomeHeroi;
  heroName = nomeHeroi;
  result.value += saida;

  //Definindo Vida
  vida = 100;
  maxVida = 100;

  //Alterando Valor no Título
  if(heroSelection == 1){
    let dados = document.getElementById("tittle");
    dados.style.color = 'lightblue';
    dados.textContent = heroName + " : " + vida.toString() + " / " + maxVida.toString();
  }
  if(heroSelection == 2){
    let dados = document.getElementById("tittle");
    dados.style.color = 'red';
    dados.textContent = heroName + " : " + vida.toString() + " / " + maxVida.toString();
  }

  //Iniciando nova Etapa
  result.value += "\n\nTudo Pronto para a Aventura! \n\n Digite [inicio] para começar o Jogo";

  //OPÇÃO 1
  let optionMessage1 = "inicio";
  let option1 = document.getElementById("option1");
  option1.textContent = optionMessage1;

  //OPÇÃO 2
  let optionMessage2 = "cancelar";
  let option2 = document.getElementById("option2");
  option2.textContent = optionMessage2;
}


// ==========
//  MISSÕES
// ==========

function moveTest(choose: string){
  let result = <HTMLInputElement>document.getElementById("textinfos");
  let message = "\nApós dias de Viagem, finalmente chegou em seu Destino, as Terriveis Masmorras de Ergástulo!\n\nDepois de encontrar a Passagem ao Subterrâneo você se depara com uma porta bem antiga e desgastada, onde com um bom empurrão ela se move e você finalmente consegue entrar em um tipo de sala especial vazia, onde está completamente escura\n\nApós acender uma Tocha você consegue enxergar que a sala leva para um Túnel que segue em frente até um breu total, você consegue ver que só existe esse caminho para dentro da Masmorra\n\nO que o Cavaleiro " + heroName + " vai fazer?"
  result.value = message;

  //Opção 1
  let option1 = document.getElementById("option1");
  option1.style.color = 'lightgreen';
  let optionMsg1 = "seguir reto";
  option1.textContent = optionMsg1;

  //Opção 2
  let option2 = document.getElementById("option2");
  option2.style.color = 'yellow';
  let optionMsg2 = "voltar para fora";
  option2.textContent = optionMsg2;

  //Resultados
  if(choose == 'seguir reto'){
    if(heroSelection == 1){
      let result = <HTMLInputElement>document.getElementById("textinfos");
      let message = "\nApós verificar seus equipamentos e itens importantes, você toma coragem e confiança e avança para dentro da Masmorra escura a sua frente com uma Tocha na mão esquerda e uma espada na mão direita\n\nOlhando mais de perto o Corredor a sua frente você consegue ver uma mensagem escrita com sangue na parede onde diz\n\nQUEM ENTRAR NESSA MASMORRA SABERÁ A VERDADE E A VERDADE O DEVORARÁ!"
      movements.hero1p1();//Teste de Movimento
      result.value = message;

      let option1 = document.getElementById("option1");
      let optionMsg1 = "cancelar";
      option1.textContent = optionMsg1;
  
      let option2 = document.getElementById("option2");
      let optionMsg2 = "cancelar";
      option2.textContent = optionMsg2;
    }
    if(heroSelection == 2){
      let result = <HTMLInputElement>document.getElementById("textinfos");
      let message = "\nApós verificar seus equipamentos e itens importantes, você toma coragem e confiança e avança para dentro da Masmorra escura a sua frente com uma Tocha na mão esquerda e uma espada na mão direita\n\nOlhando mais de perto o Corredor a sua frente você consegue ver uma mensagem escrita com sangue na parede onde diz\n\nQUEM ENTRAR NESSA MASMORRA SABERÁ A VERDADE E A VERDADE O DEVORARÁ!\n\n[FIM DA DEMO, OBRIGADO POR TESTAR]"
      movements.hero2p1();//Teste de Movimento
      result.value = message;

      let option1 = document.getElementById("option1");
      let optionMsg1 = "cancelar";
      option1.textContent = optionMsg1;
  
      let option2 = document.getElementById("option2");
      let optionMsg2 = "cancelar";
      option2.textContent = optionMsg2;
    }
  }
  if(choose == 'voltar para fora'){
    if(heroSelection == 2){
      movements.hero2begin();
      let result = <HTMLInputElement>document.getElementById("textinfos");
      let message = "\nVocê desiste de querer entrar na Masmorra e consegue voltar para a Saída da caverna por onde você entrou.\n\nApós ver a luz do sol novamente, você consegue ver um grupo de Mercenários vindo em sua Direção, onde o Líder deles fala:\n[LÍDER]: O que você está fazendo fora da caverna? O seu Rei nos contratou para ficarmos de olho em você e para não deixar que você saia da Masmorra sem a Coroa, volte lá para dentro imediatamente ou teremos que usar a força\n\n O que o Cavaleiro " + heroName + " irá fazer?"
      result.value = message;
      
      //Opção de Lutar
      let option1 = document.getElementById("option1");
      let optionMsg1 = "lutar com mercenarios";
      option1.textContent = optionMsg1;

      //Opção de Voltar para dentro
      let option2 = document.getElementById("option2");
      let optionMsg2 = "voltar para dentro";
      option2.textContent = optionMsg2;
    }
    if(heroSelection == 1){
      movements.hero1begin();
      let result = <HTMLInputElement>document.getElementById("textinfos");
      let message = "\nPor uma Força maior você reconsidera entrar na Masmorra, talvez por ter sentido algum mal vindo daquele corredor e temendo por sua vida você deseja sair daquele lugar.\n\n Retornando ao seu Cavalo que espera na rua, você consegue ver a chave dourada que você recebeu de seu pai, que por ter escolhido você como o Cavaleiro que iria salvar o Reino de Ludunia tinha esperanças no retorno da Coroa e por isso lhe deu a Chave da cidade para poder voltar a qualquer momento e isso lhe pesou muito na Consciência\n\n O que o Cavaleiro " + heroName + " irá fazer?"
      result.value = message;
      
      //Opção de Lutar
      let option1 = document.getElementById("option1");
      let optionMsg1 = "voltar a cidade";
      option1.textContent = optionMsg1;

      //Opção de Voltar para dentro
      let option2 = document.getElementById("option2");
      let optionMsg2 = "voltar para dentro";
      option2.textContent = optionMsg2;
    }
  }
  if(choose == "lutar com mercenarios"){
    let result = <HTMLInputElement>document.getElementById("textinfos");
    let message = "\n[GAME OVER]\n\nPor serem um número muito maior que você e muito mais armados, foi simplesmente um Massacre, onde o Cavaleiro " + heroName + " Faleceu após uma luta breve e curta!\n\n Digite [cancelar] para reiniciar o Jogo"
    result.value = message;
    
    //Retirando a Vida
    vida = 0;
    let dados = document.getElementById("tittle");
    dados.textContent = heroName + " : " + vida.toString() + " / " + maxVida.toString();
  
    let option1 = document.getElementById("option1");
    let optionMsg1 = "cancelar";
    option1.textContent = optionMsg1;
    let option2 = document.getElementById("option2");
    let optionMsg2 = "cancelar";
    option2.textContent = optionMsg2;
  }
  if(choose == "voltar a cidade"){
    let result = <HTMLInputElement>document.getElementById("textinfos");
    let message = "\n[GAME OVER]\n\nApós uma Jornada exaustiva de volta para o seu Reino de mãos vazias, você consegue ver ao longe que a Capital do Reino de Ludunia, onde ficava o seu pai, estava em chamas!\n\nCavalgando mais forte para chegar em casa você consegue ver melhor que a Bandeira encontrada na frente da Cidade é do Reino inimigo de Ludunia,com isso, você finalmente entendeu que haviam mandado um Cavaleiro do Reino do Rei Gandalf e haviam recuperado a Coroa e voltaram para conquistar o trono de Ludunia, onde o povo foi dizimado e seu pai também, deixando você como o último Cavaleiro de Ludunia e odiado por todos por ter Desertado \n\n Digite [cancelar] para reiniciar o Jogo"
    result.value = message;
      
    let option1 = document.getElementById("option1");
    let optionMsg1 = "cancelar";
    option1.textContent = optionMsg1;

    let option2 = document.getElementById("option2");
    let optionMsg2 = "cancelar";
    option2.textContent = optionMsg2;
  }
  if(choose == "voltar para dentro"){
    let result = <HTMLInputElement>document.getElementById("textinfos");
    let message = "\nVendo que por Forças Maiores era necessário voltar para a Masmorra, aproveitou um ultimo momento para respirar ar Fresco e pegar um Sol e retornou para dentro para ver o que se esconde na escuridão subterrânea";
    result.value = message;

    //Opção de continuação
    let option1 = document.getElementById("option1");
    let optionMsg1 = "seguir reto";
    option1.textContent = optionMsg1;
    let option2 = document.getElementById("option2");
    let optionMsg2 = "seguir reto";
    option2.textContent = optionMsg2;
  }


}


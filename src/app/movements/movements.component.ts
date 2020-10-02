import { Component} from '@angular/core';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent{

  constructor() { }
}

  // MOVIMENTOS DO JOGADOR 1
   
  export function hero1begin(){
    var move = document.getElementById('hero1');
    move.style.top = "15px";
    move.style.left = "22px";
  }

  export function hero1p1() {
    var move = document.getElementById('hero1');
    move.style.top = "15px";
    move.style.left = "105px";
  }

  export function hero1p2() {
    var move = document.getElementById('hero1');
    move.style.top = "15px";
    move.style.left = "160px";
  }

  export function hero1p3() {
    var move = document.getElementById('hero1');
    move.style.top = "15px";
    move.style.left = "230px";
  }

  export function hero1p4() {
    var move = document.getElementById('hero1');
    move.style.top = "80px";
    move.style.left = "230px";
  }

  export function hero1p5() {
    var move = document.getElementById('hero1');
    move.style.top = "150px";
    move.style.left = "230px";
  }

  export function hero1p6() {
    var move = document.getElementById('hero1');
    move.style.top = "210px";
    move.style.left = "230px";
  }

  export function hero1p7() {
    var move = document.getElementById('hero1');
    move.style.top = "260px";
    move.style.left = "230px";
  }

  export function hero1p8() {
    var move = document.getElementById('hero1');
    move.style.top = "330px";
    move.style.left = "230px";
  }

  export function hero1p9() {
    var move = document.getElementById('hero1');
    move.style.top = "330px";
    move.style.left = "300px";
  }

  export function hero1p10() {
    var move = document.getElementById('hero1');
    move.style.top = "330px";
    move.style.left = "350px";
  }

  export function hero1p11() {
    var move = document.getElementById('hero1');
    move.style.top = "330px";
    move.style.left = "410px";
  }

  export function hero1final() {
    var move = document.getElementById('hero1');
    move.style.top = "320px";
    move.style.left = "510px";
  }

  // MOVIMENTOS DO JOGADOR 2

  export function hero2begin(){
    var move = document.getElementById('hero2');
    move.style.top = "712px";
    move.style.left = "990px";
  }

  export function hero2p1(){
    var move = document.getElementById('hero2');
    move.style.top = "610px";
    move.style.left = "990px";
  }
  
  export function hero2p2() {
    var move = document.getElementById('hero2');
    move.style.top = "550px";
    move.style.left = "990px";
  }

  export function hero2p3() {
    var move = document.getElementById('hero2');
    move.style.top = "480px";
    move.style.left = "990px";
  }

  export function hero2p4() {
    var move = document.getElementById('hero2');
    move.style.top = "410px";
    move.style.left = "990px";
  }

  export function hero2p5() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "970px";
  }

  export function hero2p6() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "880px";
  }

  export function hero2p7() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "790px";
  }

  export function hero2p8() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "690px";
  }

  export function hero2p9() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "620px";
  }

  export function hero2final() {
    var move = document.getElementById('hero2');
    move.style.top = "330px";
    move.style.left = "510px";
  }

  // POSIÇÕES BONUS

  export function bonusb1(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "280px";
  }

  export function bonusb2(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "340px";
  }

  export function bonusb3(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "400px";
  }

  export function bonusb4(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "460px";
  }

  export function bonusb5(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "520px";
  }

  export function bonusb6(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "590px";
  }

  export function bonusb7(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "650px";
  }

  export function bonusb8(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "150px";
    move.style.left = "720px";
  }

  export function bonusb9(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "220px";
    move.style.left = "720px";
  }

  export function bonusb10(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "280px";
    move.style.left = "720px";
  }

  export function bonusb11(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "220px";
    move.style.left = "520px";
  }

  export function bonusfinal(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "320px";
    move.style.left = "520px";
  }

  // LOCAIS ESPECIAIS

  export function specialesquerda(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "500px";
    move.style.left = "200px"
  }

  export function specialdireita(hero: string){
    var move = document.getElementById(hero);
    move.style.top = "500px";
    move.style.left = "790px"
  }


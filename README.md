# Coordenadas das Posições no Jogo

### Como poder mover a peça pelo tabuleiro

1. Colocar a imagem como **position: absolute;** no css


### Como pegar posição para ver o local da peça

```html
 <a href="http://www.google.com">
    <img src="../assets/Mapa-Dungeon.png" ismap>
  </a>
```
*  Passando o mouse por cima da imagem vai mostrar no canto esquerdo a posição da seguinte forma:
    * `www.google.com/?15,22`
    * **top: 15px**
    * **left: 22px**


# Jogador 1 (Começando por Cima)

* **Tamanho do Jogador**
    * `width`: 60px;
    * `height`: 60px;

Posição|top|left
|---|---|---|
Inicio|15px|22px
Posição 1|15px|105px
Posição 2|15px|160px
Posição 3|15px|230px
Posição 4|80px|230px
Posição 5|150px|230px
Posição 6|210px|230px
Posição 7|260px|230px
Posição 8|330px|230px
Posição 9|330px|300px
Posição 10|330px|350px
Posição 11|330px|410px
Posição Final|320px|510px

# Jogador 2 (Começando por baixo)

* **Tamanho do Jogador**
  * `width`: 60px;
  * `height`: 60px;

Posição|top|left
|---|---|---|
Inicio|712px|990px
Posição 1|610px|990px
Posição 2|550px|990px
Posição 3|480px|990px
Posição 4|410px|990px
Posição 5|330px|970px
Posição 6|330px|880px
Posição 7|330px|790px
Posição 8|330px|690px
Posição 9|330px|620px
Posição Final|330px|510px

# Posições Bônus

Posição|top|left
|---|---|---|
Posição B1|150px|280px
Posição B2|150px|340px
Posição B3|150px|400px
Posição B4|150px|460px
Posição B5|150px|520px
Posição B6|150px|590px
Posição B7|150px|650px
Posição B8|150px|720px
Posição B9|220px|720px
Posição B10|280px|720px
Posição B11|220px|520px
Posição Final pelo bonus|320px|520px

# Locais Especiais

Posição|top|left
|---|---|---|
Área da Esquerda|500px|200px
Área da Direita|500px|790px
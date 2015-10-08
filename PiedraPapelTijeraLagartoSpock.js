var opc;
var piedra = 0;
var papel = 2;
var tijera = 4;
var lizard = 3;
var spock = 1;
var result;

function rndm(minimo, maximo) //Genera un número aleatorio entre un rango de enteros
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var opciones = ["Piedra", "Spock", "Papel", "Lizard", "Tijeras"]; //Generamos los nombres de las opciones 0 = piedra, 1 = papel...

var opcionMaquina = rndm(0,4); //Generamos una opción random para la máquina entre 0 y 4

opc = prompt("¿Qué eliges?\nPiedra: 0\nSpock: 1\nPapel: 2\n Lizard: 3\n Tijeras: 4", 0); //Solicitamos la opción del jugador
opc = parseInt(opc);

alert("Elegiste " + opciones[opc]); //Imprimimos los valores que están en juego
alert("Javascript eligió " + opciones[opcionMaquina]);

 	result = (opcionMaquina - opc) % 5;  //Utilizamos módulo aritmético para simplificar las 25 comparaciones en sólo 3 casos
    if (result == 1 || result == 2) alert("Perdiste! ");
    else if  (result == 0) alert("Empate!");
    else alert("Ganaste! ");
/*
Para los resultados en lugar de validar las 25 opciones utilizamos el módulo aritmético quedando en las tres últimas líneas de código. Acorde a wikipedia:
The majority of such proposed generalizations are isomorphic to a simple game of modulo arithmetic, where half the differences are wins for player one.
For instance, rock-paper-scissors-Spock-lizard (note the different order of the last two moves) may be modeled as a game in which each player picks a number 
from one to five. Subtract the number chosen by player two from the number chosen by player one, and then take the remainder modulo 5 of the result.
Player one is the victor if the difference is one or three, and player two is the victor if the difference is two or four. If the difference is zero, the game 
is a tie. 
*/

/*
1 - Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

- La fórmula del perímetro  es p = 2*(a +b)

3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que ingrese un número en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, sino pierde, se debe mostrar mensaje en consola.
*/

// 1
let texto = prompt("Ingrese el texto: ");

function cadenaTexto (texto){
    if (texto === texto.toUpperCase()){
        document.write("La cadena ingresada está formada por mayúsculas");
    }
    else if(texto === texto.toLowerCase()){
        document.write("La cadena ingresada está formada por minusculas");
    }
    else{
        document.write("La cadena ingresada está formada por mezclas de mayúsculas y minusculas");
    }
}

cadenaTexto(texto);


// 2
let ladoUno = Number(prompt("Ingrese el valor del primer lado: "));
let ladoDos = Number(prompt("Ingrese el valor del segundo lado: "));

function calcularPerimetro (ladoUno, ladoDos){
    
    let perimetro = 2 * (ladoUno + ladoDos);
    console.log(`El perimetro de los lados es: ${perimetro}`);

}

calcularPerimetro(ladoUno, ladoDos);

// 3

function numeroMagico (){
    let numeroRandom = Math.floor(Math.random() * 10 + 1);
    let numeroUser = Number(prompt("Ingrese un numero: "));

    if (numeroUser === numeroRandom){
        console.log("¡Ganaste, adivinaste el número mágico!");
    }
    else{
        console.log("Perdiste, no lograste adivinar el número mágico :(");
    }
}

numeroMagico();
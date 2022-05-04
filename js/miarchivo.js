/*
    1. Pedir numero mediante Prompt al usuario
    2. Sumarle al numero que le pedi al usuario 
    3. En cada repeticion sumarle otro
    
*/

// Tablas de multiplicacion

let numeroUsuario = Number(prompt("Ingresa un numero"));

for (let i = 1; i <= 10; i++){
    let resultado = numeroUsuario * i;
    console.log (numeroUsuario + "x" + i + "="+resultado);
}

//Turnos

for (let l = 1; l <=10; l++ ){
    
    let ingresarNombre = (prompt("Ingrese su nombre porfavor"));
    let ingresarApellido = (prompt("Ingrese su apellido porfavor"));

    alert("Turno N° " + l +  "  Nombre: " +ingresarNombre +ingresarApellido );
}

//Sorteo random

let numeroGanador = Number(prompt("Ingrese un numero al azar"));

while (numeroGanador == 7) {
    alert("Ganaste! El numero ganador es el 7");
}

alert("Ups! No es el numero ganador, mas suerte la proxima vez");
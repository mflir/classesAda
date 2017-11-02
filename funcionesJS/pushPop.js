var notas = ["do","re","mi","fa","sol"];

var notasPush = notas.push("la", "si"); //6

//notas.pop();
//notas[4] = "la";
//notas[5] = "si";

console.log(notasPush); //6 (retorna la cantidad de elementos total)
console.log("El valor que retorna push es igual a la cantidad del length" + notasPush === notas.length); //true

console.log("Array con push: " + notas);

var notaEliminada = notas.pop(); //"si" (retorna elemento eliminado)

console.log(notas);
//

console.log(notaEliminada);


var notaSi = nota.pop(); //"si"
var notaLa = nota.pop(); //"la"

console.log(notaSi, notaLa); 


//tarea con shift (saca) y unshift (agrega)

//los que agregan retornan el valor numerico (cantidad de elementos actualizada)
//los que sacan retornan el elemento eliminado (si lo guardo en una variable)
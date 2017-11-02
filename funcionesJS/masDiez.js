// crear un array del 1 al 1000 que me devuelva el mismo array y uno nuevo con los elementos + 10 

var numeros = [];

for (var i=0;i<10;i++){
	numeros[i] = i;
}


var numeroMasDiez = numeros.map(function(numero){
	return numero + 10;

});

console.log ("array al 100: " + numeros);

console.log("array + 10: " + numeroMasDiez);
//METODO MAP
//crea un nuevo array sin tocar el original con el resultado de lo que tocamos


var numeros = [1,2,3,4,5,6,7,];

var numerosMultiplicados = numeros.map(function(numero){
	return numero * 2;

});

console.log("Array original: " + numeros);
console.log("Array x 2: " + numerosMultiplicados);

//la funcion puede o no recibir paramentros 
// e, i, num

var numeros = [6,5,3,1,8,7,2,4]; //i primero vuelta y j segunda vuelta

for (var i = 0; i < numeros.length; i++){

	for (var j = 0; j < numeros.length-i; j++) { //en for no va ";" porque termina el ciclo
		
		//si el numero es mayor a su siguiente --> intercambio!
		if (numeros[j] > numeros [j+1]){
			var temp = numeros[j];
			numeros[j] = numeros[j+1];
			numeros[j+1] = temp;
		}
console.log (i,j);
	}
}
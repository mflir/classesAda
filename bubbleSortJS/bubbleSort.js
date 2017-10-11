x = [6,5,3,1,8,7,2,4];
var swap;
//guardo en un temporal el numero a pisar 
 console.log (x);

for (var j=0; j < x.length; j++) { //una vez por cada elemento recorre todos

		for (var i=0; i < x.length-j; i++){ //recorro el array y distingo si el elemento es mayo que el que le sigue, si lo es hago el swap 
				if (x[i] > x[i+1]){
				swap = x[i];
				x[i] = x[i+1];
				x[i+1] = swap;
				}
		}
}

console.log(x);

//var numtemp = numeros [o];
//piso el primer numero

//numeros[0] = numeros [1];
//piso el segundo numer con la var temp

//numero[1] = numTemp;
//console.log(numeros);


var numeros = [6,5,3,1,8,7,2,4]; //i primero vuelta y j segunda vuelta

for (var i = 0; i < numeros.length; vuelta++){

	for (var j = 0; j < numeros.length-i; j++) { //en for no va ";" porque termina el ciclo
		
		//si el numero es mayor a su siguiente --> intercambio!
		if (numeros[i] > numeros [i+1]){
			var temp = numeros[i];
			numeros[i] = numeros[i+1];
			numeros[i+1] = temp;
		}

	}
}


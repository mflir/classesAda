/*var fibonacci = function (mes) {
	var n1=0;
	var n2=1;
	var n3;
	for(var i=0; i<mes; i++){
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
	return n3;
}

console.log(fibonacci (20)); //me da el valor final a los 20 meses*/

// x = fibonacci (mes-1) + fibonacci(mes-2);
//x=n3 (x es lo que retorna)
//mes es el parametro

/*function fibonacci (mes){
	var x=1;
	for(var i=0; i<mes; i++){
		x = fibonacci (i-1) + fibonacci(i-2);
}
return x;
}

var conejos = fibonacci (20);
console.log (conejos);*/



//-------->optimizada:

function fibonacci(num){
	if (num <=1) return 1; //no necesito un else, porque ya vuelvo al programa principal, ejecuto si o si esa sentencia
	return fibonacci(num-1) + fibonacci(num-2);
} 

var cantConejos = fibonacci(7);
console.log(cantConejos); 

//respuestas -----> 1, 2, 3, 5, 8, 13, 21 



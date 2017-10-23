var fibonacci = function (mes) {
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

console.log(fibonacci (20)); //me da el valor final a los 20 meses
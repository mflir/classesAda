var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var letrasOrdenado = true;

for (var i=0; i < letras.length && letrasOrdenado; i ++) {

	letrasOrdenado = false;

	for (var j=0; j < letras.length-i; j++) {

	if (letras[j] = letras[letras.length-1]){
		var temp = letras[j];
		letrasOrdenado = true;
		console.log (letras);
}
}

var notas = ["do","re","mi","fa","sol"];

console.log(notas.indexOf("re")); //devuelve el indice del elemento que le paso por parametro

var reIndice = notas.indexOf("re"); //1
var reMuestro = notas[reIndice];

console.log (reMuestro);

//console.log(notas.indexOf("Jirafa"));
//cuando no encuentra retorna -1

if (notas.indexOf("crema") > -1){
	console.log("tenemos stock");
}else{
	console.log("no tenemos, vuelvan prontos");
}

var nombre = "pancho";

console.log ("Hola " + nombre + " Como estas?");


function mostrar (nombre, apellido){
	console.log(apellido,nombre);
}

mostrar ("Pepe","Feliz");


////


function saludo (){ //funcion nombre sin parametro 
	console.log("hola");
}

saludo();


function saludo (){
	//console.log("hola");
	return "hola"; //devuelve un valor que sale de la funcion
}

//console.log(saludo());//uso una funcion como parametro de otra
//me guardo el valor de la funcnoon en una variable:

var valorSaludo = saludo(); 
console.log(valorSaludo)

//como saludo me devuelve algo deberia guardarlo por eso creo una variable !!!
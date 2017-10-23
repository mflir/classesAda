var nombre = "Nemo"; //global 
var nombres = ["Lala", "Po", "Dipsy", "Nemo" ];

function buscandoNemo (nombre, nombres) { //parametros son variables (objetos, strings, numeros, booleanos)
	var encontrado = falso; //solo dentro de la funcion
		for (var i=0; i<nombres.length,i++){
			if (nombre==nombres[i]){
				return true; //no lo sigo recorriendo, doy el resultado ya q puedo devolver un valor booleano. 
				//sale de la funcion (funciona como break;)
			}
		}
		return false;

/* 

comentarios en las funciones :

params (parametros)
return
opcional ---> explicar que hace la funcion

*/

}

if (buscandoNemo(nombre, nombres) == true){
	console.log ("Encontre a Nemo!!");
}
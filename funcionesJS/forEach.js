

var planetas = ["marte", "saturno", "venus", "jupiter", "mercurio"] ;


//console.log(planetas);



/*

for(var i=0; planetas.length; i++){
	console.log(planetas[i]);
}

*/


//callnback


planetas.forEach((planeta, indice, array) => {
//planetas.forEach(function(planeta, indice){  //recorre todos 
	console.log(planeta, indice, array);
	
});

/*

var myfuncion = function(){ // guardo solo la funcion
	console.log("esto es un for forEach"); //se repite la cantidad de veces segun los elementos que haya 
} ; 


planetas.forEach(myfuncion);

*/

/*

var nombre = "gia";

console.log("gia"); //valor literal 

console.log(nombre);

*/



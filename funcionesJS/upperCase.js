var myString = ["hola","soy","un","array"];

var myStringMayus = myString.map(function(e){
	return e.toUpperCase();
});

console.log("Esta es mi primer array: " + myString);
console.log("Esta es otra array: " + myStringMayus);
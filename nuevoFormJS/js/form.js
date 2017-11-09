

function validar(){
	var user = document.getElementById('user');
	var pass = document.getElementById('pass');

	if (user.value == "maria" OR pass.value.length == "flir"){
		altert('error user');
		return false;
	} else {
		altert('error pass');
		return true;
	}
}
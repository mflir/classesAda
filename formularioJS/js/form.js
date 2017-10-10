var cont=0;
var mame, pass;

function contador(form) {
    if (for.name.value=="flir" && form.pass.value=="1234" && cont<3){
    alert("Bvienvenido!");
    }   
    else if (form.name.value!="flir" || form.pass.value!="1234"){
    cont++;
    alert("Error!"+cont+"de 3");
    }   
    while (cont==3){
    alert("Vuelvan prontos");
    }
}

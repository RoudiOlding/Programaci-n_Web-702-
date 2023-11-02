function cambiarImagen(){
    const imagen1 = document.getElementById("img1").src;
    if(imagen1 == "http://127.0.0.1:5500/JavaScript/Ejercicio_4/CH_3.png"){
        document.getElementById("img1").src = "http://127.0.0.1:5500/JavaScript/Ejercicio_4/CH_3 (2).png"
        alert("Cambio exitoso");
    }else{
        document.getElementById("img1").src = "http://127.0.0.1:5500/JavaScript/Ejercicio_4/CH_3.png"
        alert("Cambio exitoso");
    }
}
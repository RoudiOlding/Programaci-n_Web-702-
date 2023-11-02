function cambiarCampo() {
    const input = document.getElementById("campo");
    const carac = document.getElementById("carac");
    const boton = document.getElementById("botton");

    boton.addEventListener("click", function() {
        const inputValor = input.value;
        carac.innerHTML = inputValor;
        input.value = "";
    });
}

document.addEventListener("DOMContentLoaded", cambiarCampo);

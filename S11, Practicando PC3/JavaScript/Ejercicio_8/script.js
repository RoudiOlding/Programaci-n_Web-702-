function cargarJson(){
    const cargar = document.getElementById("cargarJSON");
    const destino = document.getElementById("resultado");

    cargar.addEventListener("click", function() {
        fetch('datos.json')
            .then(response => response.json())
            .then(data => {
                const personas = data.personas;
                const personasTransformadas = personas.map(persona => {
                    return {
                        nombre: persona.nombre.toUpperCase(),
                        edad: persona.edad,
                        ciudad: persona.ciudad
                    };
                });
    
                destino.textContent = JSON.stringify(personasTransformadas, null, 2);
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON: ' + error);
            });
    });
}

document.addEventListener("DOMContentLoaded", cargarJson);


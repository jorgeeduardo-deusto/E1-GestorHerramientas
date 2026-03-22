const herramientas = [
    {id:101, nombre: "Taladro Bosch", estado: "disponible", importancia: "alta"},
    {id: 102, nombre: "Radial Makita", estado: "en uso", importancia: "media"},
    {id: 103, nombre: "Sierra circular", estado: "averiada", importancia: "alta"},
    {id: 104, nombre: "lijadora orbital", estado: "disponible", importancia: "baja"},
];

function EstadoPlanta(){
    let averiadas = 0;

    for (let i = 0; i < herramientas.length; i++){
        if(herramientas[i].estado == "averiada"){
            averiadas++;
        }
    }

let paginasIncidencias = document.getElementById("titulo-incidencias");

if (paginasIncidencias != null){
    if(averiadas>0){
        alert("Alerta: Hay " + averiadas + " herramientas averiadas");
    }
}
}


function herramientasImportancia(){
    console.log("--- Herramientas que tienen prioridad---");
    let j = 0;
    while(j< herramientas.length){
        if(herramientas[j].importancia == "alta"){
console.log("Esta herramienta necesita reparación: " + herramientas[j].nombre);
        }
        j++;
    }
}

function prestamo(){
    const idBuscado = 103;
    let encontrado = false;

    for(let h of herramientas){
        if(h.id == idBuscado){
            encontrado = true;
            if(h.estado == "averiada"){
                alert("No se puede prestar la herramienta " + h.nombre + "porque está averiada");
            } else{
                alert("Sí se realiza el préstamo para la herramienta " + h.nombre);
            }
        }
    }
}

console.log("Sistema de gestión de herramientas");
EstadoPlanta();
herramientasImportancia();
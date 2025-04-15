document.addEventListener("DOMContentLoaded", function() {
    fetch("datos/clasificacion.json")
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("tablaClasificacion");
            data.forEach(equipo => {
                let fila = `<tr><td>${equipo.nombre}</td><td>${equipo.puntos}</td></tr>`;
                tabla.innerHTML += fila;
            });
        });

    fetch("datos/calendario.json")
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("listaCalendario");
            data.forEach(partido => {
                let item = `<li>${partido.fecha}: ${partido.local} vs ${partido.visitante}</li>`;
                lista.innerHTML += item;
            });
        });

    fetch("datos/equipos.json")
        .then(response => response.json())
        .then(data => {
            const listaEquipos = document.getElementById("listaEquipos");
            data.forEach(equipo => {
                let item = `<div><h3>${equipo.nombre}</h3><img src="img/${equipo.logo}" alt="${equipo.nombre}"></div>`;
                listaEquipos.innerHTML += item;
            });
        });
});

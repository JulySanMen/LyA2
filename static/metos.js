function puzzlelineal() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/puzzle', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Convertir la respuesta JSON a un objeto JavaScript
            var response = JSON.parse(xhr.responseText);
            // Actualizar el contenido de la página con el resultado recibido
            document.getElementById('resultado').innerHTML = '<h1>Puzzle Lineal</h1><p>' + response.resultado + '</p>';
        }
    };
    xhr.send();
} 
function vuelos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/vuelos', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Convertir la respuesta JSON a un objeto JavaScript
            var response = JSON.parse(xhr.responseText);
            // Actualizar el contenido de la página con el resultado recibido
            document.getElementById('resultado').innerHTML = '<h1>Puzzle Lineal</h1><p>' + response.resultado + '</p>';
        }
    };
    xhr.send();
} 
function DFS() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/DFS', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Convertir la respuesta JSON a un objeto JavaScript
            var response = JSON.parse(xhr.responseText);
            // Actualizar el contenido de la página con el resultado recibido
            document.getElementById('resultado').innerHTML = '<h1>Puzzle Lineal</h1><p>' + response.resultado + '</p>';
        }
    };
    xhr.send();
} 
function DFSIter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/DFSIter', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Convertir la respuesta JSON a un objeto JavaScript
            var response = JSON.parse(xhr.responseText);
            // Actualizar el contenido de la página con el resultado recibido
            document.getElementById('resultado').innerHTML = '<h1>Puzzle Lineal</h1><p>' + response.resultado + '</p>';
        }
    };
    xhr.send();
} 
function obtener_ruta() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/obtener_ruta', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Convertir la respuesta JSON a un objeto JavaScript
            var response = JSON.parse(xhr.responseText);
            // Actualizar el contenido de la página con el resultado recibido
            document.getElementById('resultado').innerHTML = '<h1>Puzzle Lineal</h1><p>' + response.resultado + '</p>';
        }
    };
    xhr.send();
} 
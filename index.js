// se carga el contenido de la pagina
document.addEventListener('DOMContentLoaded', function() {
    // Botón de mensaje
    const toggleButton = document.getElementById('toggle-parrafo');
    let parrafoVisible = false;
    let parrafoElement = null;

    // se agrega el evento click al boton toggleButton
    toggleButton.addEventListener('click', function() {
        if (!parrafoVisible) {
            parrafoElement = document.createElement('p');
            parrafoElement.textContent = '¡Este es un mensaje dinámico!';
            parrafoElement.className = 'mensaje-dinamico';
            // se agrega el elemento p al contenido dinamico
            document.getElementById('contenido-dinamico').appendChild(parrafoElement);
        } else {
            // se verifica si el elemento p existe
            if (parrafoElement) {
                // se elimina el elemento p
                parrafoElement.remove();
                parrafoElement = null;
            }
        }
        parrafoVisible = !parrafoVisible;
    });

    // Botón de cambio de color
    const colorButton = document.getElementById('cambiar-color');
    const colores = ['#2b4c7e', '#567ebb', '#606d80', '#1f1f20'];
    let colorIndex = 0;

    // funcion para cambiar el color de fondo
    colorButton.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colores.length;
        document.body.style.backgroundColor = colores[colorIndex];
    });

    // Botón contador
    const contadorButton = document.getElementById('contador');
    let contador = 0;

    // funcion para incrementar el contador
    contadorButton.addEventListener('click', function() {
        contador++;
        contadorButton.textContent = `Contador: ${contador}`;
    });

    // Botón lista
    const listaButton = document.getElementById('lista');
    let listaVisible = false;
    let listaElement = null;

    listaButton.addEventListener('click', function() {
        // funcion para mostrar la lista
        if (!listaVisible) {
            listaElement = document.createElement('ul');
            listaElement.className = 'lista-dinamica';
            // se crea una lista de elementos
            const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
            // se recorre la lista de elementos
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listaElement.appendChild(li);
            });
            
            document.getElementById('contenido-dinamico').appendChild(listaElement);
            listaButton.textContent = 'Ocultar Lista';
        } else {
            // si la lista esta visible, se elimina el elemento ul y se actualiza el texto del boton
            if (listaElement) {
                listaElement.remove();
                listaElement = null;
            }
            listaButton.textContent = 'Mostrar Lista';
        }
        listaVisible = !listaVisible;
    });

    // Botón imagen
    const imagenButton = document.getElementById('imagen');
    let imagenVisible = false;
    let imagenElement = null;

    // funcion para mostrar la imagen
    imagenButton.addEventListener('click', function() {
        // si la imagen no esta visible, se crea un elemento img y se agrega al contenido dinamico
        if (!imagenVisible) {
            imagenElement = document.createElement('img');
            imagenElement.src = 'https://www.mdzol.com/u/fotografias/m/2023/6/22/f850x638-1430770_1508259_5740.png';
            imagenElement.alt = 'Imagen aleatoria';
            imagenElement.className = 'imagen-dinamica';
            document.getElementById('contenido-dinamico').appendChild(imagenElement);
            imagenButton.textContent = 'Ocultar Imagen';
        } else {
            // si la imagen esta visible, se elimina el elemento img y se actualiza el texto del boton
            if (imagenElement) {
                imagenElement.remove();
                imagenElement = null;
            }
            imagenButton.textContent = 'Mostrar Imagen';
        }
        imagenVisible = !imagenVisible;
    });

    // Botón reloj
    const relojButton = document.getElementById('reloj');
    let relojVisible = false;
    let relojElement = null;
    let intervalo = null;

    // funcion para mostrar el reloj
    relojButton.addEventListener('click', function() {
        // si el reloj no esta visible, se crea un elemento div y se agrega al contenido dinamico
        if (!relojVisible) {
            relojElement = document.createElement('div');
            relojElement.className = 'reloj';
            document.getElementById('contenido-dinamico').appendChild(relojElement);

            // funcion para actualizar el reloj
            function actualizarReloj() {
                const ahora = new Date();
                const hora = ahora.getHours().toString().padStart(2, '0');
                const minutos = ahora.getMinutes().toString().padStart(2, '0');
                const segundos = ahora.getSeconds().toString().padStart(2, '0');
                relojElement.textContent = `${hora}:${minutos}:${segundos}`;
            }
            
            actualizarReloj();
            
            // se actualiza el reloj cada segundo
            intervalo = setInterval(actualizarReloj, 1000);
            relojButton.textContent = 'Detener Reloj';
        } else {
            // si el reloj esta visible, se elimina el elemento div y se actualiza el texto del boton
            if (relojElement) {
                relojElement.remove();
                relojElement = null;
            }
            // se verifica si el intervalo existe
            if (intervalo) {
                // se elimina el intervalo
                clearInterval(intervalo);
                intervalo = null;
            }
            relojButton.textContent = 'Iniciar Reloj';
        }
        // se actualiza el estado del reloj
        relojVisible = !relojVisible;
    });

    // Botón música
    const musicaButton = document.getElementById('musica');
    let audioElement = null;
    let musicaReproduciendo = false;

    musicaButton.addEventListener('click', function() {
        if (!musicaReproduciendo) {
            // Crear elemento de audio
            audioElement = document.createElement('audio');
            audioElement.src = './audio/musica.mp3';
            audioElement.loop = true;
            audioElement.className = 'audio-player';
            
            // Crear contenedor para el reproductor
            const reproductorContainer = document.createElement('div');
            reproductorContainer.className = 'reproductor-container';
            
            // Crear controles de volumen
            const volumenControl = document.createElement('div');
            volumenControl.className = 'volumen-control';
            
            const volumenLabel = document.createElement('span');
            volumenLabel.textContent = 'Volumen: ';
            
            const volumenSlider = document.createElement('input');
            volumenSlider.type = 'range';
            volumenSlider.min = '0';
            volumenSlider.max = '100';
            volumenSlider.value = '50';
            volumenSlider.className = 'volumen-slider';
            
            volumenControl.appendChild(volumenLabel);
            volumenControl.appendChild(volumenSlider);
            reproductorContainer.appendChild(volumenControl);
            
            // Añadir el reproductor al contenedor dinámico
            document.getElementById('contenido-dinamico').appendChild(reproductorContainer);
            document.getElementById('contenido-dinamico').appendChild(audioElement);
            
            // Iniciar reproducción
            audioElement.play();
            musicaButton.textContent = 'Detener Música';
            
            // Control de volumen
            volumenSlider.addEventListener('input', function() {
                audioElement.volume = this.value / 100;
            });
            
            musicaReproduciendo = true;
        } else {
            if (audioElement) {
                audioElement.pause();
                audioElement.remove();
                audioElement = null;
            }
            const reproductorContainer = document.querySelector('.reproductor-container');
            if (reproductorContainer) {
                reproductorContainer.remove();
            }
            musicaButton.textContent = 'Reproducir Música';
            musicaReproduciendo = false;
        }
    });
}); 
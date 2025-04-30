// Esperar a que la página cargue
document.addEventListener('DOMContentLoaded', function() {
    // Botón de mensaje
    const botonMensaje = document.getElementById('toggle-parrafo');
    let mensajeVisible = false;

    // se agrega el evento click al boton mensaje   
    botonMensaje.addEventListener('click', function() {
        const contenido = document.getElementById('contenido-dinamico');
        // se verifica si el mensaje esta visible
        if (!mensajeVisible) {
            const parrafo = document.createElement('p');
            parrafo.textContent = '¡Este es un mensaje dinámico!';
            parrafo.className = 'mensaje-dinamico';
            contenido.appendChild(parrafo);
        } else {
            const parrafo = contenido.querySelector('p');
            if (parrafo) parrafo.remove();
        }
        mensajeVisible = !mensajeVisible;
    });

    // Botón de color
    const botonColor = document.getElementById('cambiar-color');
    const colores = ['#40885d', '#1b643c', '#98ffee', '#23ab8c'];
    let colorActual = 0;

    // se agrega el evento click al boton color
    botonColor.addEventListener('click', function() {
        colorActual = (colorActual + 1) % colores.length;
        document.body.style.backgroundColor = colores[colorActual];
    });

    // Botón contador
    const botonContador = document.getElementById('contador');
    let contador = 0;

    // se agrega el evento click al boton contador
    botonContador.addEventListener('click', function() {
        contador++;
        botonContador.textContent = `Contador: ${contador}`;
    });

    // Botón lista
    const botonLista = document.getElementById('lista');
    let listaVisible = false;

    botonLista.addEventListener('click', function() {
        const contenido = document.getElementById('contenido-dinamico');
        // se verifica si la lista esta visible
        if (!listaVisible) {
            const lista = document.createElement('ul');
            lista.className = 'lista-dinamica';
            // se crea la lista
            for (let i = 1; i <= 4; i++) {
                const item = document.createElement('li');
                item.textContent = `ingrediente ${i}`;
                lista.appendChild(item);
            }
            // se agrega la lista al contenido
            contenido.appendChild(lista);
            botonLista.textContent = 'Ocultar Lista';
        } else {
            // se elimina la lista
            const lista = contenido.querySelector('ul');
            if (lista) lista.remove();
            botonLista.textContent = 'Mostrar Lista';
        }
        listaVisible = !listaVisible;
    });

    // Botón imagen
    const botonImagen = document.getElementById('imagen');
    let imagenVisible = false;

    // se agrega el evento click al boton imagen
    botonImagen.addEventListener('click', function() {
        const contenido = document.getElementById('contenido-dinamico');
        // se verifica si la imagen esta visible
        if (!imagenVisible) {
            const img = document.createElement('img');
            img.src = 'https://i.scdn.co/image/ab6765630000ba8a6f2b26091c05a93ccb3b2566';
            img.alt = 'momo foto';
            img.className = 'imagen-dinamica';
            contenido.appendChild(img);
            botonImagen.textContent = 'Ocultar Imagen';
        } else {
            // se elimina la imagen
            const img = contenido.querySelector('img');
            if (img) img.remove();
            botonImagen.textContent = 'Mostrar Imagen';
        }
        imagenVisible = !imagenVisible;
    });

    // Botón reloj
    const botonReloj = document.getElementById('reloj');
    let relojVisible = false;
    let intervalo;

    // se agrega el evento click al boton reloj
    botonReloj.addEventListener('click', function() {
        const contenido = document.getElementById('contenido-dinamico');
        // se verifica si el reloj esta visible
        if (!relojVisible) {
            const reloj = document.createElement('div');
            reloj.className = 'reloj';
            contenido.appendChild(reloj);
            // se crea la funcion para actualizar la hora
            function actualizarHora() {
                const ahora = new Date();
                const hora = ahora.getHours().toString().padStart(2, '0');
                const minutos = ahora.getMinutes().toString().padStart(2, '0');
                const segundos = ahora.getSeconds().toString().padStart(2, '0');
                reloj.textContent = `${hora}:${minutos}:${segundos}`;
            }
            
            actualizarHora();
            intervalo = setInterval(actualizarHora, 1000);
            botonReloj.textContent = 'Detener Reloj';
            // se agrega el evento click al boton reloj
        } else {
            const reloj = contenido.querySelector('.reloj');
            if (reloj) reloj.remove();
            clearInterval(intervalo);
            botonReloj.textContent = 'Iniciar Reloj';
        }
        relojVisible = !relojVisible;
    });

    // Botón música
    const botonMusica = document.getElementById('musica');
    let musicaVisible = false;
    let audio;

    botonMusica.addEventListener('click', function() {
        const contenido = document.getElementById('contenido-dinamico');
        if (!musicaVisible) {
            // Crear audio
            audio = document.createElement('audio');
            audio.src = './audio/musica.mp3';
            audio.loop = true;
            
            const control = document.createElement('div');
            control.className = 'volumen-control';
    
            // crear el slider
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = '0';
            slider.max = '100';
            slider.value = '50';
            slider.className = 'volumen-slider';
            
            // se agrega el evento input al slider
            slider.addEventListener('input', function() {
                audio.volume = this.value / 100;
            });
            
            // se agrega el texto al control
            control.appendChild(document.createTextNode('Volumen: '));
            control.appendChild(slider);
            contenido.appendChild(control);
            contenido.appendChild(audio);
            
            audio.play();
            botonMusica.textContent = 'Detener Música';
        } else {
            // se elimina el control y el audio
            const control = contenido.querySelector('.volumen-control');
            if (control) control.remove();
            if (audio) {
                audio.pause();
                audio.remove();
            }
            botonMusica.textContent = 'Reproducir Música';
        }
        musicaVisible = !musicaVisible;
    });
}); 
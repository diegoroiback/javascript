var btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    console.log("Click!")
})

//Sintaxis ES6
btn.addEventListener("click", () => console.log("Click 2!"))

// TIPOS DE EVENTOS
//     blur: Cuando el elemento pierde el foco.
//     click: El usuario hace clic sobre el elemento.
//     dblclick: El usuario hace doble clic sobre el elemento.
//     focus: El elemento gana el foco.
//     keydown: El usuario presiona una tecla.
//     keypress: El usuario presiona una tecla y la mantiene pulsada.
//     keyup: El usuario libera la tecla.
//     load: El documento termina su carga.
//     mousedown: El usuario presiona el botón del ratón en un elemento.
//     mousemove: El usuario mueve el puntero del ratón sobre un elemento.
//     mouseout: El usuario mueve el puntero fuera de un elemento.
//     mouseover: El usuario mantiene el puntero sobre un elemento.
//     mouseup: El usuario libera el botón pulsado del ratón sobre un elemento.
//     unload: El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.

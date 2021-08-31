//Insertar elemento dentro de otro como se usaban prependTo y appendTo en JQuery

    var divContainer = document.getElementById("divId");
    var DivInsertado = document.querySelectorAll(".div")[0];

    //La función prepend funciona como .prependTo() en Jquery, inserta el elemento en primer posición dentro del padre
    divContainer.prepend(DivInsertado)

    //La función appendChild funciona como .appendTo() en Jquery, inserta el elemento en última posición dentro del padre
    divContainer.appendChild(DivInsertado)


//Crear elemento

    // Se crea el elemento por tipo de etiqueta
    var elemento = document.createElement('h3')
    // Después de crear el elemento se crea el contenido que hay en la etiqueta
    elemento.innerHTML = "Aguante Roiback"
    // y se inserta
    divContainer.prepend(elemento)



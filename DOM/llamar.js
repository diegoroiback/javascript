//Antes
//    Llamar un elemento = $('.div')....

//Cuando solo es 1 elemento por clase
    var divSolo = document.querySelector(".div-solo")
    divSolo.style.background = "blue"

//Cuando son más de 1 elemento
    var divs = document.querySelectorAll(".div");

    //Se debe crear un ciclo para modificar todos los elementos
    divs.forEach(function (item) {
        item.style.background = "red";
    })

    //Si se desea elegir uno especifico, toca seleccionar la posición. Las pocisiones empiezan desde 0
    var divEspecifico = document.querySelectorAll(".div")[3];
    divEspecifico.style.background = 'red'

//Llamar por id
    var divId = document.getElementById("divId");
    divId.style.background = "green";

// Se puede llamar de cualquier manera con querySelector y querySelectorAll, por clase, id, etiqueta, data....
    var divClase = document.querySelector(".div-solo");
    var divId = document.querySelector("#div-solo");
    var divEtiqueta = document.querySelector("div")
    var divData = document.querySelector(".div[data-src='example']")


//También se puede llamar usando getElementsByClassName, pero para modificar solo deja con un elemento y se debe seleccionar la posición
    var div2 = document.getElementsByClassName('div')[3]
    div2.style.background = "blue";

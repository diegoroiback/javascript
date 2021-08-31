// Agregar un estilo directo en un elemento del DOM
    var btn = document.getElementById("btn");
    btn.style.background = "red";

    //Formas de agregar estilos multiples
        //Forma 1
        btn.style.display = "flex";
        btn.style.background = "green";
        //Forma2
        btn.style.cssText = "display: flex; background: green;";
        //Forma3
        btn.style.cssText = `
            display: flex;
            background: green;
        `;

//Cuando la declaración tiene más de una palabra tipo "background-color", "flex-direction".... Se usa CamelCase
    btn.style.backgroundColor = "red";

//En el caso que esté mal copiada la declaración o valor, no sale error ni agrega nada

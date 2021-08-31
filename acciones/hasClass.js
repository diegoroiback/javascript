var body = document.querySelector("body")


if(body.classList.contains("active")) {
    var divs = document.querySelectorAll("div");

    divs.forEach(function (item) {
        item.style.background = "red";
    })
}


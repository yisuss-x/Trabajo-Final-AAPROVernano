/* > o < de edad */ 
let button = document.querySelector(".button-index")

button.addEventListener("click", () => {
    button = prompt("Ingrese su edad");

    if (button >= "18"){
        location.href = "../html/inicio.html";
    } else {
        alert("Por favor no comparta esta informacion, entrará bajo su propio riesgo");
        location.href = "../html/inicio.html";
    }
});
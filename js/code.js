/* > o < de edad */ 
let button = document.querySelector(".button-index")

button.addEventListener("click", () => {
    button = prompt("Ingrese su edad");

    if (button >= "18"){
        location.host=127.0.0.1:5500/html/inicio.html;
    } else {
        alert("Por favor no comparta esta informacion, entrará bajo su propio riesgo");
        location.host=127.0.0.1:5500/html/inicio.html;
    }
});


p id= location
//PROPIEDADES DEL OBJETO LOCATION
var texto =
//href: HREF (URL) de la padgina

texto += "<br/>Href: " +location.href;
//hostname: nombre del host de la pagina
texto += "<br/>Hostname: " +location. hostname;
//pathname: pathname de la pdgina

texto += "<br/>Pathname: " +location. pathname;
//protocol: protocolo de la pagina

texto += "<br/>Protocol: " +location. protocol;
//hash: hash o ancla de la pdgina (Ej. www.web.com/index. html#indice)

texto += "<br/>Hash: " +location. hasg;

 
//bost: nombre del hostname y el puerto
texto += "<br/>Host: " +location. host;
//origin: nombre del protocolo, hostname y el puerto

texto += "<br/>0rigin: " +location.origin;

//search: querystring de la pagina (Ej. www.web.com/index.html?user=ada)
texto += "<br/>Search: " +location.search;    
document.getElementById("location").innerHTML = texto;
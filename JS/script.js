function imprimir() {

    event.preventDefault();
    var texto = document.querySelector("#texto").value;
    console.log(texto);

}


var button = document.querySelector("#codificar");
button.onclick = imprimir;
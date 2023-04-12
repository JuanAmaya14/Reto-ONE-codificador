function Verificar(codi_O_deco) {

    const especiales = /[\á\é\í\ó\ú\Á\É\Í\Ó\Ú\`\~\!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\'\"\|\<\>\,\.\/\?\;\:]/g;
    const mayusculas = /[A-Z]/g;

    var texto = document.querySelector("#texto").value.trim();

    if (texto.match(especiales) || texto.match(mayusculas)) {

        alert("Tu texto tiene letras mayusculas o tiene caracteres especiales");

    } else if (texto == "") {

        alert("Esta vacio");

    } else {

        if (codi_O_deco == "codificar") {

            Codificar();

        } else if (codi_O_deco == "decodificar") {

            Decodificar();

        }

    }

}

function Codificar() {

    console.log("Codificar");

}

function Decodificar() {

    console.log("Decodificar");

}

const reglas = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

//var codi = document.querySelector("#codificar");
//codi.onclick = Verificar;

document.querySelector("#codificar").onclick = function (event) {
    event.preventDefault();
    Verificar("codificar");
}

document.querySelector("#decodificar").onclick = function (event) {
    event.preventDefault();
    Verificar("decodificar");
}
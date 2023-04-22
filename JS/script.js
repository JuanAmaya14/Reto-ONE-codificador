//Funcion que verifica y envia
function VerificarYEnviar(codi_O_deco) {

    const especiales = /[\á\é\í\ó\ú\Á\É\Í\Ó\Ú\`\~\!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\'\"\|\<\>\,\.\/\?\;\:]/g;
    const mayusculas = /[A-Z\Ñ]/g;

    var texto = document.getElementById("texto").value.trim();

    if (texto.match(especiales) || texto.match(mayusculas)) {

        alert("Tu texto tiene letras mayusculas o tiene caracteres especiales");

    } else if (texto == "") {

        alert("Esta vacio");

    } else {

        if (codi_O_deco == "codificar") {

            resultado = Codificar(texto);

            OcultarImagen();

            document.getElementById("resultado").value = resultado;

        } else if (codi_O_deco == "decodificar") {

            resultado = Decodificar(texto);

            OcultarImagen();

            document.getElementById("resultado").value = resultado;

        }

    }

}

//Funcion que codifica el texto
function Codificar(texto) {

    for (const i in reglas) {

        texto = texto.replaceAll(i, reglas[i]);

    }

    return texto;

}

//Funcion que decodifica el texto
function Decodificar(texto) {

    for (const i in reglas) {

        texto = texto.replaceAll(reglas[i], i);

    }

    return texto;

}

//funcion OcultarImagen
function OcultarImagen() {
    document.getElementById("nulo").style.display = "none";
}

//Objeto para reemplazar las vocales por palabras
const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

//Cuando se precione el boton "codificar"
document.getElementById("codificar").onclick = function (event) {

    event.preventDefault();

    VerificarYEnviar("codificar");
}

//Cuando se precione el boton "decodificar"
document.getElementById("decodificar").onclick = function (event) {

    event.preventDefault();

    VerificarYEnviar("decodificar");
}

//Cuando se precione el boton "copiar"
document.getElementById("copiar").onclick = function (event) {

    event.preventDefault();

    if (document.getElementById("resultado").value == "") {

        alert("No hay nada en el input de salida");

    } else {

        var contenido = document.getElementById("resultado").value;

        navigator.clipboard.writeText(contenido);

    }

}
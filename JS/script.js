//Funcion que verifica y envia
function VerificarYEnviar(codi_O_deco) {

    //Variable con diferentes caracteres especiales
    const especiales = /[\á\é\í\ó\ú\Á\É\Í\Ó\Ú\`\~\!\@\#\$\%\^\&\*\(\)\_\-\=\+\{\}\[\]\'\"\|\<\>\,\.\/\?\;\:]/g;
    //variable con letras mayusculas
    const mayusculas = /[A-Z\Ñ]/g;

    /* Captura el texto que hay un el input con el id "texto", 
    tambien eliminando espacios sobrantes en los extremos del texto */
    var texto = document.getElementById("texto").value.trim();

    if (texto.match(especiales) || texto.match(mayusculas)) {

        //Si el texto tiene caracteres especiales o letras mayusculas arroja una alerta
        alert("Tu texto tiene letras mayusculas o tiene caracteres especiales");

    } else if (texto == "") {
        //Si el texto esta vacio arroja una alerta
        alert("Esta vacio");

    } else {

        /*Si no se cumplen las condiciones anteriores entonces entra a este if
        el cual con el parametro codi_O_deco define si tiene que codificar o decodificar*/
        if (codi_O_deco == "codificar") {

            /*Si codi_O_deco es igual a "codificar" entonces se llamara a la funcion codificar y 
            nos devuelve el texto codificado*/
            resultado = Codificar(texto);

            //Encuentra el textarea con el id "resultado" y pondra el texto codificado
            document.getElementById("resultado").value = resultado;

        } else if (codi_O_deco == "decodificar") {

            /* Si codi_O_deco es igual a "decodificar" entonces se llamara a la funcion decodificar y 
            nos devuelve el texto decodificado */
            resultado = Decodificar(texto);

            //Encuentra el textarea con el id "resultado" y pondra el texto decodificado
            document.getElementById("resultado").value = resultado;

        }

    }

}

//Funcion que codifica el texto
function Codificar(texto) {

    //Sigue cada vocal del objeto reglas
    for (const i in reglas) {

        //Remplaza las vocales por las palabras segun el objeto reglas
        texto = texto.replaceAll(i, reglas[i]);

    }

    //Retorna el texto codificado
    return texto;

}

//Funcion que decodifica el texto
function Decodificar(texto) {

    //Sigue cada vocal del objeto reglas
    for (const i in reglas) {

        //Reemplaza las palabras por las vocales segun el objeto reglas
        texto = texto.replaceAll(reglas[i], i);

    }

    //Retorna el texto decodificado
    return texto;

}

//funcion OcultarImagen
function OcultarImagen() {
    //Oculta la imagen
    document.getElementById("nulo").style.display = "none";
}

//Objeto para reemplazar las vocales por palabras
const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

//Cuando se precione el boton "codificar"
document.getElementById("codificar").onclick = function (event) {

    //Evita que la pagina se reinicie
    event.preventDefault();

    //llama funcion OcultarImagen
    OcultarImagen();

    //Llama funcion VerificarYEnviar con el parametro "codificar"
    VerificarYEnviar("codificar");
}

//Cuando se precione el boton "decodificar"
document.getElementById("decodificar").onclick = function (event) {

    //Evita que la pagina se reinicie
    event.preventDefault();

    //llama funcion OcultarImagen
    OcultarImagen();

    //Llama funcion VerificarYEnviar con el parametro codificar
    VerificarYEnviar("decodificar");
}

//Cuando se precione el boton "copiar"
document.getElementById("copiar").onclick = function (event) {

    //Evita que la pagina se reinicie
    event.preventDefault();

    if (document.getElementById("resultado").value == "") {

        //Si el input donde sale el resultado esta vacio arroja una alerta
        alert("No hay nada en el input de salida");

    } else {

        /* Si la anterior condicion no se cumple entonces captura el texto que esta
        en el textarea con el id "resultados" */
        var contenido = document.getElementById("resultado").value;

        //Se copia el texto
        navigator.clipboard.writeText(contenido);

    }

}
const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "eober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(texArea.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["eober", "o"], ["ufat", "u"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDesencriptado;
}
function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
}

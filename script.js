function converter() {
    var decimal = document.getElementById("decimal").value;
    var binario = (decimal >>> 0).toString(2);
    document.getElementById("binario").value = binario;
}

function limparVisor() {
    document.getElementById("decimal").value = "";
    document.getElementById("binario").value = "";
}
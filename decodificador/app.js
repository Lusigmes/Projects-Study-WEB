 // let aux = document.querySelector('h1').style.display = "none"
// let aux = document.querySelector('h1').style.visibility = "hidden"

// Declaração da variável resultado como global
var resultado = document.getElementById("resultado");
var btnReset = document.getElementById("btnReset");
var btnCopy = document.getElementById("btnCopy");

//valor, resultado
function codificar(event) {
    let valor = document.getElementById("inputTexto").value;
    console.log(valor);
    // Atualiza o texto do campo resultado
    resultado.value = valor;
}

let copiarResultado
//btnCopy, 
btnCopy.addEventListener("click", function() {
    copiarResultado = resultado.value;
    console.log(copiarResultado)
});

//btnReset, 
btnReset.addEventListener("click", function() {
    document.getElementById("inputTexto").value = "";
    resultado.value = "";
});
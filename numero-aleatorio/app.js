function exibirTagTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}

function textoInicial(){
    exibirTagTexto('h1', "LOTERIA");
    exibirTagTexto('p', "Escolha um número aleatório");
}
textoInicial();

let numeroAleatorio = gerarNumero();
function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}
console.log(numeroAleatorio);

let count = 1;

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroAleatorio){
        exibirTagTexto('h1',    "Parabéns!");
        let tentativas = count > 1 ? "tentativas" : "tentativa";
        let textoTentativa = `Você acertou o número aleatório com ${count} ${tentativas}`;
        exibirTagTexto('p',    textoTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroAleatorio){
            exibirTagTexto('h1',    "Errou");
            exibirTagTexto('p',    "Tente um valor menor.");
        }else{
            exibirTagTexto('h1',    "Errou");
            exibirTagTexto('p',    "Tente um valor maior.");
        }
        count++;
    }
    
}

function limpar(){
    chute = document.querySelector('input');
    chute.value = "";
}
function reiniciarJogo(){
    numeroAleatorio = gerarNumero()
    limpar();
    count = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//criar botao fechar todo fora do html
var myList = document.getElementsByTagName("LI");
var i;
for(var i = 0; i < myList.length; i++){
    var btFechar = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    btFechar.className = "fechar";
    btFechar.appendChild(txt);
    myList[i].appendChild(btFechar);
}

//remover todo ao cliclar no botao fechar
var fechar = document.getElementsByClassName("fechar");
for(var i = 0; i < fechar.length; i++){
        fechar[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//checar todo
var list = document.querySelector("ul");
list.addEventListener('click', function(ev){
    if(ev.target.tagName === "LI"){
        console.log("Checou!");
        ev.target.classList.toggle('checar');
        
    }
},false);

console.log("nenhum erro, continue");
//criar novo todo fora do html na lista ao clicar em add 
function novoElemento(){
    //criando um todo na lista
    var li = document.createElement("li");//criando li
    var inputValue = document.getElementById("inText").value; //add valor de li na variavel
    var texto = document.createTextNode(inputValue);//criando o texto com o valor inserido no input
    li.appendChild(texto);//inserindo valor do text do input na lista

    console.log(inputValue);

    if(inputValue === ''){
        alert("Escreva algo!");
    }else{
        console.log("To Do criado com sucesso");
        //inserindo valor do input na lista
        document.getElementById("ulText").appendChild(li);
    }
    document.getElementById("inText").value = "";
    
    //excluir novo todo
    var btFechar = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    btFechar.className = "fechar";
    btFechar.appendChild(txt);
    li.appendChild(btFechar);

    for(var i = 0; i < fechar.length; i++){
        fechar[i].onclick = function(){
        console.log("To Do excluido com sucesso");
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
    
}
    













/*
//entrar com enter
const inputElement = document.getElementById("inText");
inputElement.addEventListener('keyup',function(x){
    var key = x.which || x.keyCode;
    if(key == 45){
        alert("valor:" +  this.value);
    }
});
*/
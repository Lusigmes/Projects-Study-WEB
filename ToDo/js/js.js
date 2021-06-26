/* estudo js pt 1
js e html 
//alert("Alert guys");
console.log("oao")
function alterar(){
    document.getElementById('p1').innerHTML='Texto Secundário';
}
function alterar2(){
    document.getElementById('p1').innerHTML='Texto Primario';
}

function chiharu(){
    document.getElementById('otaku').src='./img/chiharu.jpg'
}
function jagan(){
    document.getElementById('otaku').src='./img/17.jpg'
}
function altCSS(){
    document.getElementById('demo').style.fontSize='50px'
}
function sum(){
    result.textContent = parseFloat(n1.value) + parseFloat(n2.value);
    return false;
}
var numb1 = document.getElementById('n1');
var numb2 = document.getElementById('n2');
var butt = document.getElementById('butt');
var result = document.getElementById('result');




    butt.onclick = sum;

<p id='p1' >Texto Primário</p>

        <button type='button' onclick="alterar()"> Alterar</button>

        <button type='button' onclick="alterar2()"> Alterar</button>
        <br>

        <img type='img' id='otaku' src='./img/17.jpg'><br>
        <button type='button' onclick="chiharu()"> Chiharu</button>
        <button type='button' onclick="jagan()"> Jagaaaaan</button>

        <br>
        <p id='demo'>Alterar estilo html</p>
        <button type='button' onclick="altCSS()"> alterar</button>
        <br>
        <form>
            <input type="text" id='n1' placeholder="numero 1"/>
            <input type="text" id='n2' placeholder="numero 2"/>
            <button type="submit" id='butt'>Somar</button>
        </form> 
            <p id='result' type='text'></p>
    */
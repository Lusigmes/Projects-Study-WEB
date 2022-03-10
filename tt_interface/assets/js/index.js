/*
capturar o texto inserido no tweet
e tweetar
*/
const header = document.querySelector('header')

const tweetada = document.querySelector('textarea');
const tweetButton = document.querySelector('button');
const feed = document.querySelector('mainTweets')

/* 
recebe um tweet a partir de um evento de click no botao
*/
function getTweet(event){
    event.preventDefault();

    const tweetTextarea = tweetada.value
    createTweet(tweetTextarea)
   
}

// evento de click
tweetButton.addEventListener('click', getTweet);

/*
criar tweet recebe o valor de um texto de um tweet
cria uma data da publicação
e chama a função de listar os template do tweet
*/
function createTweet(tweetTexto){
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();

    const tweet = {
        nome: "Mamaco",
        foto: "./assets/img/black.png",
        usuario: "@mamacovoador",
        texto: tweetTexto,
        tempo: `${hora}:${min}`
    }

    listTemplateTweet(tweet)
}

//listar o template de cada tweet
function listTemplateTweet(tweet){
    
    const {nome,foto,usuario,texto,tempo} =  tweet
    //criando elementos do template da imagem do tweet
    let li = document.createElement("li");
    li.classList.add("mainTweet")
    let img = document.createElement("img");
    img.src  = foto
    img.classList.add("ftPerfil");

    //colocando conteudo do tweet no template
    //criando cada elemento do tweet
    let div =  document.createElement("div")
    div.classList.add("tweetConteudo")

    let h2 = document.createElement("h2");
    h2.innerText = nome

    let span = document.createElement("span");
    span.innerText  = `${usuario} -  ${tempo}`

    let p = document.createElement("p");
    p.innerText = texto
    
    //adicionando cada elemento do tweet dentro da div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //adicionando cadad elemento do tweet dentro da li
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    tweetada.value = ""

}

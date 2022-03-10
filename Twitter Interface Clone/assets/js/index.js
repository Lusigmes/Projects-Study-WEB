const textTweet = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".mainTweets")

    ////////////////////////////////////////
    function obterTweet(event){
        event.preventDefault()

        const conteudoTweet = textTweet.value
        gerarTweet(conteudoTweet)
        console.log("clicou")
    }
    tweetar.addEventListener('click', obterTweet)
   
    /////////////////////////////////////////
    function gerarTweet(textoTweet){
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()

        const tweet = {
            nome: "mamacoaniac",
            foto: "./assets/img/black.png",
            usuario: "@orangotangovoador",
            texto: textoTweet,
            tempo:`${hora}:${min}`
        }
        postarTweet(tweet)
    }

    /////////////////////////////////////////
    function postarTweet(tweet){
        const {nome,foto,usuario,texto,tempo} = tweet

        //criando elementos do tweet
        let li = document.createElement("li")
        let img = document.createElement("img")
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let span = document.createElement("span") 
        let p = document.createElement("p")
        
        //adicionando elementos no template
        li.classList.add("mainTweet")

        img.src = foto
        img.classList.add("ftPerfil")

        div.classList.add("tweetConteudo")

        h2.innerText = nome

        span.innerText = `${usuario}-${tempo}`

        p.innerText = texto

        //adicionbando elementos na interface(div)
        div.appendChild(h2)
        div.appendChild(span)
        div.appendChild(p)

        //adicionando elementos  na LI
        li.appendChild(img)
        li.appendChild(div)

        feed.appendChild(li)

        textTweet.value = ""
    }

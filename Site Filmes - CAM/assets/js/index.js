//Selecionar a UL lista de filmes
const listMovie = document.querySelector(".listaFilme")
//console.log(filmes) 

//Criar template de cada filme
function createTemplate(filme){

    const li = document.createElement("li")
    li.innerHTML = ` 
        <figure>
            <img src="${filme.url}" alt="${filme.nome}"/>
        </figure>
        <h2>${filme.nome}</h2> 
    `

    return li
}

//Função para listar os filmes
function listingMovies(collectionMovies){
    listMovie.innerHTML = ""
    //acessar array de filmes e jogar no template
    collectionMovies.forEach(function(filme){
        //para cada filme, deve criar um template 
        const template = createTemplate(filme)

        //add visual do filme no html
        listMovie.appendChild(template)

    })
}
listingMovies(filmes)

//Filtrar fiilme por categoria
function filterMovie(filterCategory){
    //criando loop para buscar filmes
    
    const moviesFiltered = filmes.filter(function(filme){
        if(filterCategory == filme.categoria){
            return filme
        }
    })
    listingMovies(moviesFiltered) 
}

const menuCategory = document.querySelector(".listaCategoria")

//Adicionar evento de click nos botoes do menu

menuCategory.addEventListener("click", function(event){
    //cancelar evento do link não recarregando a tela
    event.preventDefault()

    const categorySelected = event.target.text

   if(categorySelected == "Mostrar Todos")
        listingMovies(filmes)
    else   
        filterMovie(categorySelected)
    
})






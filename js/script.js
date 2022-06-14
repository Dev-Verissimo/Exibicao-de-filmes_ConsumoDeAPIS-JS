let containerMovies = document.querySelector('.movies')

const moviesFilmes = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes')

moviesFilmes.then(pegalistMovies)

function pegalistMovies(moviesAll) {
    renderizaFilmes(moviesAll.data)
}

function renderizaFilmes(filmes) {
    for (let i = 0; i < filmes.length; i++) {
        console.log(filmes[i])

        containerMovies.innerHTML += `
            <div class="movie">
                <img src=${filmes[i].imagem}>
                <div class="title">${filmes[i].titulo}</div>
            </div>
        `
    }
}


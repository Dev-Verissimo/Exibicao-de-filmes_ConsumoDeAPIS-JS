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
                <button onclick=comprar(${filmes[i].id})>
                    Comprar
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </div>
        `
    }
}


function comprar(idFilme) {
    const nome = prompt('Qual é o seu nome?')
    const quantidade = prompt('Quantos assentos?')
    const dadosDaCompra = {
        nome,
        quantidade
    }

    let promessa = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${idFilme}/ingresso`,
        dadosDaCompra
    )

    promessa.then(compraEfetuada)
    promessa.catch(erroNaCompra)

    function compraEfetuada() {
        alert('Ingresso comprado')
    }

    function erroNaCompra() {
        alert('Sessão esgotada :( ')
    }

}
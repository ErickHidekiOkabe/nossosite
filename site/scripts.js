 let container = document.querySelector('.container .row');

function buscarDados(tipo){
    let url = 'http://localhost:3000/' + tipo;
    
    axios.get(url).then(function(resposta){
        container.innerHTML = '';

        for(let game of resposta.data){
            container.innerHTML += `
            <div class="card col">
                <img class="card-img-top" src="${game.imagem}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.nome}</h5>
                    <p class="card-text">${game.ano}</p>
                </div>
            </div>`
        }
    });
}
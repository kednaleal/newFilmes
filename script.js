function getNewFilmes(titulo){
    const txt =  document.getElementById('pesquisa')
    const buttao = document.getElementById('procuraB')
    const capa = document.getElementById('capa')
    const titulo = document.getElementById('titulo')
    const descricao = document.getElementById('descricao')



    const url = `https://www.omdbapi.com/?t=${titulo}pikey=790af7bcz`
    fetch(url) // acessando a rota
    .then(response => response.json()) //pega o resultado e transforma em json
    .then(data => {
        
        //userBio.textContent = data.bio
        capa.src = data.Poster
        titulo.textContent = data.Title
        descricao.textContent = data.Trama



    })
}

getNewFilmes()
form = document.getElementById('movieForm')
title = document.getElementById('title')


function getNewFilmes(titulo) {
    const url = `https://www.omdbapi.com/?t=${titulo}pikey=790af7bcz`
    fetch(url) // acessando a rota
        .then(response => response.json()) //pega o resultado e transforma em json
        .then(data => {

            //userBio.textContent = data.bio
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            moviePlot.textContent = data.Plot
            moviePoster.src = data.Poster
            
        })
        console.log(data)
}

movieForm.addEventListener('submit', function(e) {
    
    getMovieInfos(title.value)
    e.preventDefault();
});
// getNewFilmes()
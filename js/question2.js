const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleJson(json) {
    const results = json.results;
    console.dir(results);

    const createGames = document.querySelector(".results");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/250";

        if (result.image) {
            imageUrl = result.image;
        }

html += `<div class="game">
<h2>Name of game</h2>${result.name} 
<img src="/path/to/image" alt="Name of game">
</div>`;
    });

   createGames.innerHTML = html;
}
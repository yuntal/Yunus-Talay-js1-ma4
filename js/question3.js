const detailsUrl = "https://api.rawg.io/api/games/4200";
function handleResponse(response) {
    return response.json();
}

function handleJson(json) {
    console.dir(json);
}

function handleError(error) {
    console.log(error);
}

fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });
    function createGameDetails(json) {
        console.dir(json);
    }
    const imageLink = document.querySelector(".image").style.backgroundImage = "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";
    
  
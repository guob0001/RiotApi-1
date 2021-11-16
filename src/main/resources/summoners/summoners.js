fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/deforen?api_key")
    .then(response => response.json())
    .then(summoner => {
        console.log(summoner);
    });
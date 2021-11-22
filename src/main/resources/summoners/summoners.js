const summonerRiotDiv = document.getElementById("summoners-riot");
let searchSummoner = "Gubz";

function fetchSummonerFromInput(){
    searchSummoner = document.getElementById("summoner-search").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchSummoner + "?api_key=RGAPI-746e1a13-be6a-409e-a930-01a8c6fa9e07")
        .then(response => response.json())
        .then(summoner => {
            console.log(summoner)
            const name = document.getElementById("summoner-name").innerText = summoner.name;
            const summonerLevel = document.getElementById("summoner-summonerLevel").innerText = summoner.summonerLevel;
            const id = document.getElementById("summoner-id").innerText = summoner.id;
            const accountId = document.getElementById("summoner-accountId").innerText = summoner.accountId;
            const revisionDate = document.getElementById("summoner-revisionDate").innerText = summoner.revisionDate;
            const profileIconId = document.getElementById("summoner-profileIconId").innerText = summoner.profileIconId;
            const puuId = document.getElementById("summoner-puuId").innerText = summoner.puuId;

            saveSummoner = {
                name: name,
                summonerLevel: summonerLevel,
                id: id,
                accountId: accountId,
                revisionDate: revisionDate,
                profileIconId: profileIconId,
                puuid: puuid
            };
        });
}

function saveSummonerToDb(saveSummoner){
    console.log(saveSummoner)
    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(saveSummoner)
    }).then(response => response.json())
        .then(result => console.log(result))
}
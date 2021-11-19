const summonerRiotDiv = document.getElementById("summoners-riot");
let searchSummoner = "Gubz";

function fetchSummonerFromInput(){
    searchSummoner = document.getElementById("summoner-search").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchSummoner + "?api_key=RGAPI-f02dbaa0-0794-42ea-85fe-f07f5ccf83c0", )
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
    fetch(baseURL + "/summoners", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(saveSummoner)
    }).then(response => response.json())
        .then(result => console.log(result))
}
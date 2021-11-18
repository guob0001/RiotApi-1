const summonerRiotDiv = document.getElementById("summoners-riot");
let searchSummoner = "Gubz";


fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchSummoner + "?api_key=")
    .then(response => response.json())
    .then(summoner => {
        document.getElementById("summoner-name").innerText = summoner.name;
        document.getElementById("summoner-level").innerText = summoner.summonerLevel;
        document.getElementById("summoner-accountId").innerText = summoner.accountId;
        document.getElementById("summoner-revisionDate").innerText = summoner.revisionDate;
        document.getElementById("summoner-profileIconId").innerText = summoner.profileIconId;
        document.getElementById("summoner-puuId").innerText = summoner.puuId;
    });

function createSummonerCard(summoner){
    const summonerElement = document.createElement("Div");
    summonerElement.innerText =summoner.name;

summonerRiotDiv.appendChild(summonerElement);
}
function saveSummonerToDb(){
    const name = document.getElementById("summoner-name").value;
    const summonerLevel = document.getElementById("summoner-level").value;
    const accountId = document.getElementById("summoner-accountId").value;
    const revisionId = document.getElementById("summoner-revisionDate").value;
    const profileIconId = document.getElementById("summoner-profileIconId").value;
    const puuId = document.getElementById("summoner-puuId").value;

    const SaveSummoner = {
        name: name,
        level: summonerLevel,
        accountId: accountId,
        revisionId: revisionId,
        profileIconId: profileIconId,
        PuuId: puuId
    };
        fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchSummoner + "?api_key=", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(SaveSummoner)
        })
            .then(summonerDB => {
                if (summonerDB.status === 200){
                    createSummonerCard(SaveSummoner);
            }else {
        console.log("summoners not created.", response.status);
    }
})
.catch(error => console.log("Network related error", error));

}

function fetchSummonerFromInput(){
    searchSummoner = document.getElementById("summoner-search").value;
    fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchSummoner + "?api_key=")
        .then(response => response.json())
        .then(summoner => {
            document.getElementById("summoner-name").innerText = summoner.name;
            document.getElementById("summoner-level").innerText = summoner.summonerLevel;
            document.getElementById("summoner-accountId").innerText = summoner.accountId;
            document.getElementById("summoner-revisionDate").innerText = summoner.revisionDate;
            document.getElementById("summoner-profileIconId").innerText = summoner.profileIconId;
            document.getElementById("summoner-puuId").innerText = summoner.puuId;
        });
}
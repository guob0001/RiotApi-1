const matchesFormDiv = document.getElementById("create-matches-form");
const matchesFormExpandButton = document.getElementById("expand-match-form");


const createMatchesForm = `<div>
    <label>Behavior</label>
    <input id="create-match-behavior" placeholder="Behavior">
    <label>Game type</label>
    <input id="create-match-gameType" placeholder="Game type">
    <label>Duration</label>
    <input id="create-match-duration" placeholder="Game duration">    
    <label>Start Date </label>
    <input id="create-match-startDate" placeholder="Start Date">    
    <label>End Date</label>
    <input id="create-match-endDate" placeholder="End Date">
    <label>Summoner id</label>
    <input id="create-match-summonersId" placeholder="Summoner id">
    <label>champion id</label>
    <input id="create-match-championsId" placeholder="Champion Id">
    <button onclick="createMatch()">Create a New Match</button>
</div>`;




function showMatchesForm() {
    matchesFormExpandButton.style.display = "none";
    matchesFormDiv.innerHTML = createMatchesForm;
}

function removeMatchesForm() {
    matchesFormExpandButton.style.display = "block";
    matchesFormDiv.innerHTML = "";
}

function createMatch(matchId){
    const matchToCreate = {
        behavior: document.getElementById("create-match-behavior").value,
        gameType: document.getElementById("create-match-gameType").value,
        duration: document.getElementById("create-match-duration").value,
        startDate: document.getElementById("create-match-startDate").value,
        endDate: document.getElementById("create-match-endDate").value,
        summoners: {puuid: document.getElementById("create-match-summonersId").value},
        champions: {id: document.getElementById("create-match-championsId").value}
    };
    console.log(matchToCreate)
    fetch(baseURL + "/matches/" + matchId, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(matchToCreate)
    }).then(response => response.json())
        .then(match => {
            removeMatchesForm();
            createMatchesCard(match);
        });
}
document.getElementById("expand-match-form")
    .addEventListener("click", showMatchesForm);

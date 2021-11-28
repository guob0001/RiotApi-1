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

function createMatch() {
    const behavior = document.getElementById("create-match-behavior").value;
    const gameType = document.getElementById("create-match-gameType").value;
    const duration = document.getElementById("create-match-duration").value;
    const startDate = document.getElementById("create-match-startDate").value;
    const endDate = document.getElementById("create-match-endDate").value;
    const puuid = document.getElementById("create-match-summonersId").value;
    const id = document.getElementById("create-match-championsId").value;

        const newMatch = {
            behavior: behavior,
            gameType: gameType,
            duration: duration,
            startDate: startDate,
            endDate: endDate,
            puuid: puuid,
            id: id

    };
    fetch(baseURL + "/matches/" + puuid + "/" + id, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newMatch)
    }).then(response => response.json())
        .then(match => {
            removeMatchesForm();
            createMatchesCard(match);
        });
}

document.getElementById("expand-match-form")
    .addEventListener("click", showMatchesForm);

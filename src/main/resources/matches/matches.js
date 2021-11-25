const matchesRiotTableBody = document.getElementById("matches-tbody");

fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(matches =>{
        matches.map(createMatchesCard);
    });

function createMatchesCard(matches){
    const  matchesTableRow = document.createElement("tr");
    matchesTableRow.id = matches.id;

    matchesRiotTableBody.appendChild(matchesTableRow);

    constructMatchesTableRow(matchesTableRow, matches);
}

function constructMatchesTableRow(matchesTableRow, matches){
    matchesTableRow.innerHTML = `
            <td>
                <p class="row-matches-matches-id">${(matches.id)}</p>
            </td>
            <td>
                <p class="row-matches-duration">${(matches.duration.toString())}</p>
            </td>
            <td>
                <p class="row-end-date">${(matches.endDate)}</p>
            </td>
            <td>
                <p class="row-game-type">${(matches.gameType)}</p>
            </td>
            <td>
                <p class="row-start-date">${(matches.startDate)}</p>
            </td>
            <td>
                <p class="row-start-date">${(matches.behavior)}</p>
            </td>
            <td>
                <p class="row-summoner-id">${(matches.summoners.id)}</p>
            </td>
            <td>
                <p class="row-champion-id">${(matches.champions.id)}</p>
            </td>
            <td>
                <button id="update-button-${matches.id}">🔄</button>
                <button onclick="deleteMatch(${matches.id})">❌</button>
            </td>
        `;
        document.getElementById(`update-button-${matches.id}`)
            .addEventListener("click", () => updateMatch(matches));
}

function deleteMatch(matchId) {
    fetch(baseURL + "/matches/" + matchId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(matchId).remove();
        } else {
            console.log(response.status);
        }
    });
}
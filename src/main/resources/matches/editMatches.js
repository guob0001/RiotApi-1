function updateMatch(match){
    const tableRowToUpdate = document.getElementById(match.id)

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-match-behavior-${match.id}" value="${match.behavior}">
        </td>
        <td>
            <input id="update-match-duration-${match.id}" type="number" value="${match.duration}">
        </td>
       <td>
            <input id="update-match-end-date-${match.id}" value="${match.endDate}">
       </td>
       <td>
            <input id="update-match-game-type-${match.id}" value="${match.gameType}">
       </td>
       <td>
            <input id="update-match-start-date-${match.id}" value="${match.startDate}">
       </td>
       <td>
            <input id="update-match-summoner-${match.id}" type="text" value="${match.summoners.puuid}">
       </td>
        <td>
            <input id="update-match-champion-${match.id}" type="text" value="${match.champions.name}">
       </td> 
       <td>
            <button id="cancel-update-${match.id}">✖</button>
            <button onclick="updateMatchInBackend(${match.id})">✅</button>
       </td>
       <td>
            <button onclick="deleteMatch(${match.id})">❌</button>
       </td>
    `;

    document.getElementById(`cancel-update-${match.id}`)
        .addEventListener("click", () => undoUpdateTableRow(match));
}

function undoUpdateTableRow(match) {
    const matchTableRow = document.getElementById(match.id);

    constructMatchesTableRow(matchTableRow, match);
}

function updateMatchInBackend(matchId) {

    const tableRowToUpdate = document.getElementById(matchId);

    const matchToUpdate = {
        id: matchId,
        behavior: document.getElementById(`update-match-behavior-${matchId}`).value,
        duration: document.getElementById(`update-match-duration-${matchId}`).value,
        endDate: document.getElementById(`update-match-end-date-${matchId}`).value,
        gameType: document.getElementById(`update-match-game-type-${matchId}`).value,
        startDate: document.getElementById(`update-match-start-date-${matchId}`).value,
        summoners: document.getElementById(`update-match-summoner-${matchId}`).value,
        champions: document.getElementById(`update-match-champion-${matchId}`).value
    };

    fetch(baseURL + "/matches/" + matchId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(matchToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructMatchesTableRow(tableRowToUpdate, matchToUpdate);
        }
    });

}
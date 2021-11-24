function updateMatch(match){
    const tableRowToUpdate = document.getElementById(match)

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-match-behavior-${match.id}" value="${escapeHTML(match.behavior)}">
        </td>
        <td>
            <input id="update-match-duration-${match.id}" type="number" value="${escapeHTML(match.duration.toString())}">
        </td>
       <td>
            <input id="update-match-end-date-${match.id}" value="${escapeHTML(match.endDate)}">
       </td>
       <td>
            <input id="update-match-game-type-${match.id}" value="${escapeHTML(match.gameType)}">
       </td>
       <td>
            <input id="update-match-start-date-${match.id}" value="${escapeHTML(match.startDate)}">
       </td>
       <td>
            <button id="cancel-update-${match.id}">✖</button>
            <button onclick="updateMatchInBackend(${match.id})">✅</button>
       </td>
       <td>
            <button onclick="deleteMatch(${matches.id})">❌</button>
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
        duration: document.getElementById(`update-gallery-duration-${matchId}`).value,
        endDate: document.getElementById(`update-gallery-end-date-${matchId}`).value,
        gameType: document.getElementById(`update-gallery-game-type-${matchId}`).value,
        startDate: document.getElementById(`update-gallery-start-date-${matchId}`).value
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
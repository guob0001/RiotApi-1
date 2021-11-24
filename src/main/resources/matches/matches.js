const matchesRiotTableBody = document.getElementById("matches-tbody");

fetch(baseURL + "/matches")
    .then(response => response.json())
    .then(matches =>{
        matches.map(createMatchesCard);
    });

function createMatchesCard(matches){
    const  matchesTableRow = document.createElement("tr");
    matchesTableRow.matches_id = matches.matches_id;

    matchesRiotTableBody.appendChild(matchesTableRow);

    constructMatchesTableRow(matchesTableRow, matches);
}

function constructMatchesTableRow(matchesTableRow, matches){
    matchesTableRow.innerHTML = `
            <td>
                <p class="row-matches-duration">${escapeHTML(matches.duration)}</p>
                
            </td>
            <td>
                <p class="row-matches-matches-id">${escapeHTML(matches.matches_id)}</p>
                
            </td>
            <td>
                <p class="row-end-date">${escapeHTML(matches.endDate)}</p>
            </td>
            <td>
                <p class="row-game-type">${escapeHTML(matches.gameType)}</p>
            </td>
            <td>
                <p class="row-start-date">${escapeHTML(matches.start_date)}</p>
            </td>
            <td>
                <p class="row-summoner-id">${escapeHTML(matches.summoner_id)}</p>
            </td>
            <td>
                <p class="row-champion-id">${escapeHTML(matches.champion_id)}</p>
            </td>
        `;

}
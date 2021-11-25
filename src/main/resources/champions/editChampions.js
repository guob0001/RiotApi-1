function updateChampion(champion) {
    const tableRowToUpdate = document.getElementById(champion.id);

    tableRowToUpdate.innerHTML = `
        <td>
            <input id="update-champion-ban-rate-${champion.id}" type="number" value="${escapeHTML(champion.banRate)}">
        </td>
        <td>
            <input id="update-champion-name-${champion.id}" value="${escapeHTML(champion.name)}">
        </td>
       <td>
            <input id="update-champion-pick-rate-${champion.id}" type="number" value="${escapeHTML(champion.pickRate)}">
       </td>
       <td>
            <input id="update-champion-price-${champion.id}" type="number" value="${escapeHTML(champion.price)}">
       </td>
       <td>
            <button id="cancel-update-${champion.id}">✖️</button>
            <button onclick="updateChampionInBackend(${champion.id})">✅</button>
       </td>
    `;

    document.getElementById(`cancel-update-${champion.id}`)
        .addEventListener("click", () => undoUpdateTableRow(champion));
}

function undoUpdateTableRow(champion) {
    const championTableRow = document.getElementById(champion.id);

    constructChampionsTableRow(championTableRow, champion);
}

function updateChampionInBackend(championId) {

    const tableRowToUpdate = document.getElementById(championId);

    const championToUpdate = {
        id: championId,
        banRate: document.getElementById(`update-champion-ban-rate-${championId}`).value,
        name: document.getElementById(`update-champion-name-${championId}`).value,
        pickRate: document.getElementById(`update-champion-pick-rate-${championId}`).value,
        price: document.getElementById(`update-champion-price-${championId}`).value
    };

    fetch(baseURL + "/champions/" + championId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(championToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructChampionsTableRow(tableRowToUpdate, championToUpdate);
        }
    });

}
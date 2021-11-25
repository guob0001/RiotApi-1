const championsRiotTableBody = document.getElementById("champions-tbody");

fetch(baseURL + "/champions")
    .then(response => response.json())
    .then(matches =>{
        matches.map(createChampionsCard);
    });

function createChampionsCard(champion){
    const  championTableRow = document.createElement("tr");
    championTableRow.id = champion.id;

    championsRiotTableBody.appendChild(championTableRow);

    constructChampionsTableRow(championTableRow, champion);
}

function constructChampionsTableRow(championTableRow, champion){
    championTableRow.innerHTML = `
            <td>
                <p class="row-champions-id">${(champion.id)}</p>
            </td>
            <td>
                <p class="row-ban-rate">${(champion.banRate)}</p>
            </td>
            <td>
                <p class="row-name">${(champion.name)}</p>
            </td>
            <td>
                <p class="row-pick-rate">${(champion.pickRate)}</p>
            </td>
            <td>
                <p class="row-price">${(champion.price)}</p>
            </td>
            <td>
                <button onclick="updateChampion(${champion.id})">🔄</button>
                <button onclick="deleteChampion(${champion.id})">❌</button>
            </td>
        `;

}

function deleteChampion(championId) {
    fetch(baseURL + "/champions/" + championId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(championId).remove();
        } else {
            console.log(response.status);
        }
    });
}
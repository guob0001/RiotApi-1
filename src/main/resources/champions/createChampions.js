const championFormParentDiv = document.getElementById("create-champion-form");
const championFormExpandButton = document.getElementById("expand-champion-form  ");

const createChampionForm = `<div>
    <label>Ban rate</label>
    <input id="create-champion-ban-rate" placeholder="ban rate">
    <label>Name</label>
    <input id="create-champion-name" placeholder="name">    
    <label>Pick rate</label>
    <input id="create-champion-pick-rate" placeholder="pick rate">    
    <label>Price</label>
    <input id="create-champion-price" placeholder="price">
    <button onclick="removeChampionForm()">Cancel</button>
    <button onclick="createChampion()">Create A New Champion</button>
</div>`;


function showChampionForm() {
    championFormExpandButton.style.display = "none";
    championFormParentDiv.innerHTML = createChampionForm;
}

function removeChampionForm() {
    championFormExpandButton.style.display = "block";
    championFormParentDiv.innerHTML = "";
}

function createChampion() {
    const championToCreate = {
        banRate: document.getElementById("create-champion-ban-rate").value,
        name: document.getElementById("create-champion-name").value,
        pickRate: document.getElementById("create-champion-pick-rate").value,
        price: document.getElementById("create-champion-price").value
    };

    fetch(baseURL + "/champions", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(championToCreate)
    }).then(response => response.json())
        .then(champion => {
            removeChampionForm();
            createChampionsCard(champion);
        }).catch(error => console.log(error));
}


document.getElementById("expand-champion-form")
    .addEventListener("click", showChampionForm);
function attachEvents() {
    let loadButton = document.getElementsByClassName("load")[0];
    let addButton = document.getElementsByClassName("add")[0];

    let catchesDiv = document.getElementById("catches");

    loadButton.addEventListener("click", () => {
        catchesDiv.innerHTML = "";
        (async function () {
            try {
                let res = await fetch("https://fisher-game.firebaseio.com/catches.json");

                if (res.status < 400) {
                    let data = await res.json();

                    for (const id in data) {
                        listCatch(id, data[id]);
                    }
                } else {
                    throw new Error("HTTP Error!");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    });

    addButton.addEventListener("click", () => {
        let anglerInput = document.querySelector("#addForm .angler").value;
        let weightInput = document.querySelector("#addForm .weight").value;
        let speciesInput = document.querySelector("#addForm .species").value;
        let locationInput = document.querySelector("#addForm .location").value;
        let baitInput = document.querySelector("#addForm .bait").value;
        let captureTimeInput = document.querySelector("#addForm .captureTime").value;

        (async function () {
            try {
                let res = await fetch("https://fisher-game.firebaseio.com/catches.json", {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        angler: anglerInput,
                        weight: weightInput,
                        species: speciesInput,
                        location: locationInput,
                        bait: baitInput,
                        captureTime: captureTimeInput
                    })
                });
                loadButton.click();
                if (res.status >= 400) {
                    throw new Error("HTTP Error!");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    });

    function listCatch(id, data) {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "catch");
        mainDiv.setAttribute("data-id", id);

        let angler = document.createElement("label");
        angler.textContent = "Angler";
        mainDiv.appendChild(angler);

        let anglerInput = document.createElement("input");
        anglerInput.setAttribute("type", "text");
        anglerInput.setAttribute("class", "angler");
        anglerInput.setAttribute("value", data.angler);
        mainDiv.appendChild(anglerInput);

        mainDiv.appendChild(document.createElement("hr"));

        let weight = document.createElement("label");
        weight.textContent = "Weight";
        mainDiv.appendChild(weight);

        let weightInput = document.createElement("input");
        weightInput.setAttribute("type", "number");
        weightInput.setAttribute("class", "weight");
        weightInput.setAttribute("value", data.weight);
        mainDiv.appendChild(weightInput);

        mainDiv.appendChild(document.createElement("hr"));

        let species = document.createElement("label");
        species.textContent = "Species";
        mainDiv.appendChild(species);

        let speciesInput = document.createElement("input");
        speciesInput.setAttribute("type", "text");
        speciesInput.setAttribute("class", "species");
        speciesInput.setAttribute("value", data.species);
        mainDiv.appendChild(speciesInput);

        mainDiv.appendChild(document.createElement("hr"));

        let location = document.createElement("label");
        location.textContent = "Location";
        mainDiv.appendChild(location);

        let locationInput = document.createElement("input");
        locationInput.setAttribute("type", "text");
        locationInput.setAttribute("class", "location");
        locationInput.setAttribute("value", data.location);
        mainDiv.appendChild(locationInput);

        mainDiv.appendChild(document.createElement("hr"));

        let bait = document.createElement("label");
        bait.textContent = "Bait";
        mainDiv.appendChild(bait);

        let baitInput = document.createElement("input");
        baitInput.setAttribute("type", "text");
        baitInput.setAttribute("class", "bait");
        baitInput.setAttribute("value", data.bait);
        mainDiv.appendChild(baitInput);

        mainDiv.appendChild(document.createElement("hr"));

        let captureTime = document.createElement("label");
        captureTime.textContent = "Capture Time";
        mainDiv.appendChild(captureTime);

        let captureTimeInput = document.createElement("input");
        captureTimeInput.setAttribute("type", "number");
        captureTimeInput.setAttribute("class", "captureTime");
        captureTimeInput.setAttribute("value", data.captureTime);
        mainDiv.appendChild(captureTimeInput);

        mainDiv.appendChild(document.createElement("hr"));

        let updateButton = document.createElement("button");
        updateButton.setAttribute("class", "update");
        updateButton.setAttribute("data-id", id);
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", (e) => {
            updateHandler(e);
        });
        mainDiv.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("data-id", id);
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (e) => {
            deleteHandler(e);
        });
        mainDiv.appendChild(deleteButton);

        catchesDiv.appendChild(mainDiv);
    }

    function updateHandler(e) {
        let anglerInput = e.target.parentNode.querySelector(".angler").value;
        let weightInput = e.target.parentNode.querySelector(".weight").value;
        let speciesInput = e.target.parentNode.querySelector(".species").value;
        let locationInput = e.target.parentNode.querySelector(".location").value;
        let baitInput = e.target.parentNode.querySelector(".bait").value;
        let captureTimeInput = e.target.parentNode.querySelector(".captureTime").value;

        (async function () {
            try {
                let catchId = e.target.getAttribute("data-id");
                let res = await fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
                    method: "put",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        angler: anglerInput,
                        weight: weightInput,
                        species: speciesInput,
                        location: locationInput,
                        bait: baitInput,
                        captureTime: captureTimeInput
                    })
                });
                loadButton.click();
                if (res.status >= 400) {
                    throw new Error("HTTP Error!");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    }

    function deleteHandler(e) {
        (async function () {
            try {
                let catchId = e.target.getAttribute("data-id");
                
                let res = await fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
                    method: "delete",
                });
                
                loadButton.click();
                
                if (res.status >= 400) {
                    throw new Error("HTTP Error!");
                }
            } catch (error) {
                console.error(error);
            }
        })();
    }
}

attachEvents();
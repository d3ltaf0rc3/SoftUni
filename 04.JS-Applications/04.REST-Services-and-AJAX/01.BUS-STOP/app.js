function getInfo() {
    let id = document.getElementById("stopId").value;
    let div = document.getElementById("stopName");
    let ul = document.getElementById("buses");
    let url = `https://judgetests.firebaseio.com/businfo/${id}.json`;

    div.textContent = "";
    ul.innerHTML = "";

    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error("Bus ID doesn't exist");
            }
            return res.json();
        })
        .then(res => {
            div.textContent = res.name;
            let buses = res.buses;

            for (const busId in buses) {
                let li = document.createElement("li");
                li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
                ul.appendChild(li);
            }
        })
        .catch(() => div.textContent = "Error");
}
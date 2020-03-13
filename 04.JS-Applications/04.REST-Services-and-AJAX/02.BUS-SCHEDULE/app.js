function solve() {
    let currentId = "depot";
    let currentStop = "";
    
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");
    let info = document.getElementsByTagName("span")[0];

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Invalid data!");
                }
                return res.json();
            })
            .then(res => {
                currentId = res.next;
                currentStop = res.name;
                info.textContent = `Next stop ${res.name}`;
                
                departButton.setAttribute("disabled", true);
                arriveButton.removeAttribute("disabled");
            })
            .catch(() => {
                info.textContent = "Error";
                
                departButton.setAttribute("disabled", true);
                arriveButton.setAttribute("disabled", true);
            });
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop}`;
        
        arriveButton.setAttribute("disabled", true);
        departButton.removeAttribute("disabled");
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
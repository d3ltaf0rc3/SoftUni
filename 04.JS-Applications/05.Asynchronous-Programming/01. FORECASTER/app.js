function attachEvents() {
    let getWeather = document.getElementById("submit");
    let location = document.getElementById("location");
    let forecast = document.getElementById("forecast");
    let current = document.getElementById("current");
    let upcoming = document.getElementById("upcoming");
    const url = "https://judgetests.firebaseio.com/locations.json";
    const symbols = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;",
        "Rain": "&#x2614;",
        "Degrees": "&#176;"
    };

    getWeather.addEventListener("click", () => {
        clearDiv();
        (async function fetchUrl() {
            try {
                let res = await fetch(url);

                if (res.status < 400) {
                    let data = await res.json();
                    let index = data.findIndex(obj => obj.name === location.value);

                    if (index === -1) {
                        throw new Error("Location not found!");
                    }

                    let cityInfo = data[index];

                    getCurrentForecast(cityInfo.code);
                    getUpcomingForecast(cityInfo.code);
                } else {
                    throw new Error("HTTP Error!");
                }
            } catch (error) {
                let currentH1 = document.createElement("h1");
                let upcomingH1 = document.createElement("h1");

                currentH1.textContent = "Error";
                upcomingH1.textContent = "Error";

                current.appendChild(currentH1);
                upcoming.appendChild(upcomingH1);
            }
        })();

        async function getCurrentForecast(code) {
            try {
                let res = await fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`);
                let data = await res.json();

                //Create the main div
                let mainDiv = document.createElement("div");
                mainDiv.setAttribute("class", "forecasts");

                //Create first span element and add it to the main div
                let spanSymbol = document.createElement("span");
                spanSymbol.setAttribute("class", "condition symbol");
                for (const condition in symbols) {
                    if (condition === data.forecast.condition) {
                        spanSymbol.innerHTML = symbols[condition];
                    }
                }
                mainDiv.appendChild(spanSymbol);

                //Create the main span element, which holds the data
                let mainSpan = document.createElement("span");
                mainSpan.setAttribute("class", "condition");

                //Create the first span element and add it to the main span
                let locationSpan = document.createElement("span");
                locationSpan.setAttribute("class", "forecast-data");
                locationSpan.textContent = data.name;
                mainSpan.appendChild(locationSpan);

                //Create the second span element and add it to the main span
                let degreeSpan = document.createElement("span");
                degreeSpan.setAttribute("class", "forecast-data");
                degreeSpan.innerHTML = `${data.forecast.low}${symbols.Degrees}/${data.forecast.high}${symbols.Degrees}`;
                mainSpan.appendChild(degreeSpan);

                //Create the last span element and add it to the main span
                let conditionSpan = document.createElement("span");
                conditionSpan.setAttribute("class", "forecast-data");
                conditionSpan.textContent = data.forecast.condition;
                mainSpan.appendChild(conditionSpan);

                //Add the main span to the main div
                mainDiv.appendChild(mainSpan);

                //Add the main div to DOM
                current.appendChild(mainDiv);
            } catch (err) {

            }
        }

        async function getUpcomingForecast(code) {
            try {
                let res = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`);
                let data = await res.json();

                //Create the main div
                let mainDiv = document.createElement("div");
                mainDiv.setAttribute("class", "forecast-info");

                //Create the three forecast spans
                let firstSpan = createSpan(data.forecast[0]);
                let secondSpan = createSpan(data.forecast[1]);
                let thirdSpan = createSpan(data.forecast[2]);

                //Add them to the main div
                mainDiv.appendChild(firstSpan);
                mainDiv.appendChild(secondSpan);
                mainDiv.appendChild(thirdSpan);
                
                //Add the main div to DOM
                upcoming.appendChild(mainDiv);
            } catch (err) {

            }
        }
    });

    function clearDiv() {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "label");
        div1.textContent = document.getElementsByClassName("label")[0].textContent;

        let div2 = document.createElement("div");
        div2.setAttribute("class", "label");
        div2.textContent = document.getElementsByClassName("label")[1].textContent;

        current.innerHTML = "";
        upcoming.innerHTML = "";

        current.appendChild(div1);
        upcoming.appendChild(div2);
        forecast.style.display = "block";
    }

    function createSpan(data) {
        let mainSpan = document.createElement("span");
        mainSpan.setAttribute("class", "upcoming");

        let firstSpan = document.createElement("span");
        firstSpan.setAttribute("class", "symbol");
        for (const condition in symbols) {
            if (condition === data.condition) {
                firstSpan.innerHTML = symbols[condition];
            }
        }

        let secondSpan = document.createElement("span");
        secondSpan.setAttribute("class", "forecast-data");
        secondSpan.innerHTML = `${data.low}${symbols.Degrees}/${data.high}${symbols.Degrees}`;

        let thirdSpan = document.createElement("span");
        thirdSpan.setAttribute("class", "forecast-data");
        thirdSpan.innerHTML = data.condition;

        mainSpan.appendChild(firstSpan);
        mainSpan.appendChild(secondSpan);
        mainSpan.appendChild(thirdSpan);
        return mainSpan;
    }
}

attachEvents();
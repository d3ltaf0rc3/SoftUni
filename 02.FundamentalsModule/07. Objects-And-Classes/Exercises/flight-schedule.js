function flightSchedule(input) {
    let allFlights = input.shift();
    let changedStatuses = input.shift();
    let status = input.shift().shift();
    let flights = {};

    allFlights.forEach(element => {
        let [id, Destination] = element.split(" ");
        flights[id] = { Destination };
    });
    
    changedStatuses.forEach(element => {
        let [id, Status] = element.split(" ");
        if (flights.hasOwnProperty(id)) {
            flights[id].Status = Status;
        }
    });
   
    for (const key in flights) {
        if (flights[key].Status === status && status === "Cancelled") {
            console.log(flights[key]);
        } else if (flights[key].Status === undefined && status !== "Cancelled"){
            flights[key].Status = "Ready to fly";
            console.log(flights[key]);
        }
    }
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
);
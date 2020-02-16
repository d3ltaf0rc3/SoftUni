function tickets(inputArr, criteria) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    inputArr.forEach(element => {
        let [destination, price, status] = element.split("|");
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });


    tickets.sort((a, b) => {
        if (typeof a[criteria] === "number") {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    });
    return tickets;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));
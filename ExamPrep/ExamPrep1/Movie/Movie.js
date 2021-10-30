class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date == date && s.hall == hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        const screening = {
            date,
            hall,
            description
        }

        this.screenings.push(screening);

        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        const targetIndex = this.screenings.findIndex(s => s.date == date && s.hall == hall);
        
        if (targetIndex == -1) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        const currentProfit = this.ticketPrice * Number(soldTickets);
        this.totalProfit += currentProfit;
        this.totalSoldTickets += soldTickets;

        const targetScreening = this.screenings.splice(targetIndex, 1);

        return `${this.movieName} movie screening on ${targetScreening[0].date} in ${targetScreening[0].hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        const result = [];

        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this.totalSoldTickets.toFixed(0)}`);

        if (this.screenings.length == 0) {
            result.push('No more screenings!');
        } else {
            result.push('Remaining film screenings:');
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

            for (const item of this.screenings) {
                result.push(`${item.hall} - ${item.date} - ${item.description}`);
            }
        }

        return result.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.endScreening('October 4, 2020', 'IMAX 3D3D', 100));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

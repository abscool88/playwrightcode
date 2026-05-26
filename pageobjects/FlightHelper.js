class FlightHelper {
    constructor(page) {
        this.page = page;
    }
    
    async searchFlights(departure, arrival) {
        await this.page.goto('https://www.blazedemo.com');
        const departureCity = this.page.locator('select[name="fromPort"]');
        const arrivalCity = this.page.locator('select[name="toPort"]');
        await departureCity.selectOption(departure);
        await arrivalCity.selectOption(arrival);
        await this.page.getByRole('button', { name: 'Find Flights' }).click();
    }
}

module.exports = { FlightHelper };

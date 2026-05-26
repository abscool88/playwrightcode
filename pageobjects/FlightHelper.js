class FlightHelper {
    constructor(page) {
        this.page = page;
        this.departureCityInput = '#departureCity';
        this.arrivalCityInput = '#arrivalCity'; 

    }
    async enterDepartureCity(city) {
       await this.departureCityInput.selectOption(city);
    }   

    async enterDestination(city) {
       await this.arrivalCityInput.selectOption(city);
    }   


}
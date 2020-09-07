/*
*Esta clase nos permite obtener información del clima a través de la API
*
*/
export class Weather {
    constructor(city, countryCode) {
        this.apiKey = "f56b12a1255f065faf28959c21831a0e";
        this.city = city;
        this.countryCode = countryCode;
    }

    //Obtiene la información de la API y la devuelve
    async getWeather() {

        const URI = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/find?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;

    }

    //Cmbia la localización
    changeLocation(city, countryCode) {

        this.city = city;
        this.countryCode = countryCode;

    }
}
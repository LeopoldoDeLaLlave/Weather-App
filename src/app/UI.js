/*
*Pone en pantalla la información conseguida a través del método render
*/
export class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');

    }

    render(weather) {
        this.location.textContent = weather.list[0].name + ' / ' + weather.list[0].sys.country;
        this.desc.textContent = weather.list[0].weather[0]['description'];
        this.string.textContent = weather.list[0].main.temp + ' °C';
        this.humidity.textContent = 'Humidity: ' + weather.list[0].main.humidity + '%';
        this.wind.textContent = 'Wind: ' + weather.list[0].wind.speed + ' m/s';
    }
}
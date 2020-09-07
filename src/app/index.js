const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');
require('./index.css');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

//Llama a los métodos para obtener la información de la ciudad y en cso de que devuelva algo llama al
//método para ponerlo en pantalla
async function fetchWeather() {

        const data = await weather.getWeather();
        //Si count es 0 quiere decir que no ha devuelto paises y esto ocurre cuando no existen
        if (data.count > 0) {
                ui.render(data);
        } else {
                alert("City not found");
        }

}

//Al pulsar el botón, si el campo de la ciudad no está vacío se llama al método para 
//cambiarlo en la pantalla y almacenarlo
document.getElementById("w-change-btn").addEventListener("click", (e) => {
        if (document.getElementById("city").value != "") {
                const city = document.getElementById("city").value;
                const countryCode = document.getElementById("countryCode").value;
                weather.changeLocation(city, countryCode);
                store.setLocationData(city, countryCode);
                fetchWeather();
                e.preventDefault();
        }else{
                alert("You have tor write the city");
        }


})

//Al cargar la pantalla se mustra la información
document.addEventListener('DOMContentLoaded', fetchWeather());
let weather = {
    "apiKey": "6fe95fccfd0b42933697a96ff80db03c",
    fetchWeather: function (input_text) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
                + input_text 
                + "&units=metric&appid="
                + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {

        const { name } = data;
        const { icon, description, main } = data.weather[0];
        const { speed } = data.wind;
        const { humidity, temp } = data.main;
        console.log(temp, name, icon, description, main, speed, humidity);
        document.querySelector(".weather--widget").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".type--of--weather").innerText = description;
        document.querySelector(".wind--speed").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".temperature").innerText = temp + "° C";


    },
    search: function(){
        this.fetchWeather(document.querySelector(".input__text").value);
        
    }
};

document.querySelector(".button--submit").addEventListener("click", function() {
    weather.search();

});




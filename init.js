
//Fetches geolocation from browser
 navigator.geolocation.getCurrentPosition(showPosition)
 
 //Store longitude and latitude for future use
 let long = position.coords.longitude
 let lat = position.coords.latitude

 // Gets current date and time
 const now = new Date(); 
 // Formats the string
 const hours = String(now.getHours()).padStart(2, '0');


 async function fetchWeatherData() {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit`);
  const data = await response.json();
  console.log(data);
}
    const temp = data.current.temperature_2m;
    const precip = data.current.precipitation;

    if (hours >= 20 || hours < 8) { 
        window.location.replace("night.html");
    }
    if (precip > 0 && precip < 2 && temp > 32) {
        window.location.replace("lrain.html");
    }
    if (precip == 0 && temp < 50) {
        window.location.replace("cloudy.html");
    }
    if (precip == 0 && temp >= 65) {
        window.location.replace("sunny.html");
    }
    if (precip > 0 && temp < 32) {
        window.location.replace("snow.html");
    }
    if (precip > 0 && precip > 2 && temp < 32) {
        window.location.replace("hrain.html");
    }


// Fetches geolocation from browser and uses it to load weather data.
function showPosition(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(`Latitude: ${lat}, Longitude: ${long}`);
  fetchWeatherData(lat, long);
}

function handlePositionError(error) {
  console.error('Geolocation error:', error);
}

navigator.geolocation.getCurrentPosition(showPosition, handlePositionError);

async function fetchWeatherData(lat, long) {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit`);
    const data = await response.json();
    console.log(data);

    const temp = data?.current?.temperature_2m;
    const precip = data?.current?.precipitation;
    if (temp == null || precip == null) {
      console.error('Weather response missing expected fields:', data);
      return;
    }

    const now = new Date();
    const hours = now.getHours();

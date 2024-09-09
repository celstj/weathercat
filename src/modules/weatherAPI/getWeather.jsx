
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

async function getWeather(apiKey) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data; // Return data for further use
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

export default getWeather;

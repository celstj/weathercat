
// Function to fetch weather data for a specific location
async function getLocation(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const weatherElement = document.querySelector('.weather');
        if (weatherElement) {
            weatherElement.innerHTML = `
                <p>Location: ${data.location.name}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

export default getLocation;
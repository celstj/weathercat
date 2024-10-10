
const getWeather = async (apiKey,location) => {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};

export default getWeather;

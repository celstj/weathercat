import { useState, useEffect, useMemo } from 'react';
import SearchBar from './modules/hooks/SearchBar';
import getWeather from './modules/weatherAPI/getWeather';
// import getForecast from './modules/weatherAPI/getForecast';

// Main App component
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSearch = async(query) => {
    try {
      const data = await getWeather(apiKey, query);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error);
    }
  }

  const formattedTime = useMemo(() => {
    if (!weatherData) return ''; 

    const localtime = weatherData.location.localtime;
    const time = new Date(localtime);

    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    return time.toLocaleString('en-US', options);
  }, [weatherData]);


  return (
    <div className='header-section'>
      <h2>Weather Cat</h2>
      {/* Pass handleSearch to SearchBar as a prop */}
      <SearchBar onSearch={handleSearch} />
      {error && <p>Error loading weather data: {error.message}</p>}
      {weatherData && (
        <div className='weather-body'>
          <div className='today-weather'>
            <p>Location: {weatherData.location.name}, {weatherData.location.country}</p>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Weather: {weatherData.current.condition.text}</p>
            <p>Wind Speed: {weatherData.current.wind_kph}/kph</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Time: {formattedTime}</p>
          </div>
          <div className='upcoming-weather'>
            {/* <UpcomingDays/> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
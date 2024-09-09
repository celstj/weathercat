import { useState, useEffect } from 'react';
import './modules/App.css';
import getWeather from './modules/weatherAPI/getWeather';
import getLocation from './modules/weatherAPI/getLocation';
import getTemperature from './modules/weatherAPI/getTemperature';

// Main App component
function App() {
  // State variables for weather data, loading status, and errors
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch weather data on component mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch weather data
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const data = await getWeather(apiKey);
        setWeatherData(data); // Set weather data to state
        setLoading(false); // Update loading status
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error); // Set error to state
        setLoading(false); // Update loading status
      }
    };

    fetchWeather();
  }, []); // Empty dependency array means this runs once on component mount

  // Conditional rendering based on loading and error states
  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error loading weather data: {error.message}</p>; // Show error message

  return (
    <div>
      <h2>Weather Cat</h2>
      {weatherData && (
        <div>
          <p>Location: {weatherData.location.name}</p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
export function getTemperature(data) {
    // Process or extract temperature data from the API response
    return data.current.temp_c; // Example for temperature in Celsius
  }

  export default getTemperature;
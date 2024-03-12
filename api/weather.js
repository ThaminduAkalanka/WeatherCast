export const fetchWeatherData = async (city) => {
    try {
      const apiKey = "978ef448c439f9baca2ca8cac36a6849";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
   };
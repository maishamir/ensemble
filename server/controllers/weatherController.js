import axios from 'axios';

const getWeather = async (req, res) => {
    try {
        const apiKey = 'dff7bde87830b16de9cf636f857afc25';
        const city = 'Victoria, CA';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        const weatherData = response.data;
        
        res.status(200).json(weatherData);
    } catch (e) {
        console.error(`Error getting weather data: ${e}`);
        res.status(500).json({ message: `Error getting weather data: ${e.message}` });
    }
}

export { getWeather };

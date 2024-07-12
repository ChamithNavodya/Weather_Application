import { get } from "axios";

const getWeatherData = async (latitude, longitude) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
   const response = await get(url);
   return response.data;
};

export default getWeatherData;

import axios from "axios";
import * as openAI from "../utils/openAI.js";
import dotenv from "dotenv";

dotenv.config();

// Fetch weather data from OpenWeatherMap One Call API for a specific day
export const getWeather = async (latitude, longitude, timestamp) => {
   try {
      const oneCallUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHER_API_KEY}`;
      console.log(oneCallUrl);
      const response = await axios.get(oneCallUrl);
      const dailyData = response.data;
      return { ...dailyData, weatherText: dailyData?.weather[0]?.description };
   } catch (error) {
      throw error;
   }
};

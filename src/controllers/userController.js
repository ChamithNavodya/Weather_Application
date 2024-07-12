import User from "../models/User.js";
import * as weatherService from "../services/weatherService.js";
import * as emailService from "../services/emailService.js";

// PUT /api/users/:email/location
export const updateUserLocation = async (req, res) => {
   const { latitude, longitude, email } = req.body;
   try {
      const user = await User.findOneAndUpdate(
         { email },
         { $set: { location: { latitude, longitude } } },
         { new: true }
      );
      if (!user) return res.status(404).send("User not found");
      res.send("User updated succesfully!");
   } catch (error) {
      res.status(400).send(error);
   }
};

export const getUserWeather = async (req, res) => {
   const { id } = req.user;

   try {
      const user = await User.findOne({ _id: id }).lean();
      if (!user) return res.status(404).send("User not found");

      let timestamp;
      if (date) {
         const specificDate = new Date(date);
         timestamp = Math.floor(specificDate.getTime() / 1000); // Convert date to Unix timestamp
      } else {
         const currentDate = new Date();
         timestamp = Math.floor(currentDate.getTime() / 1000); // Use current date if no date is provided
      }

      const weatherData = await weatherService.getWeather(
         user.location.latitude,
         user.location.longitude,
         timestamp
      );

      await emailService.sendWeatherReport(user.email, weatherData);
      res.send(
         `Current weather in your location: ${weatherData.weather[0].description}, temperature: ${weatherData.main.temp}°C.`
      );
   } catch (error) {
      res.status(400).send(error.message);
   }
};

import cron from "node-cron";
import User from "./models/User.js";
import { getWeather } from "./services/weatherService.js";
import { sendWeatherReport } from "./services/emailService.js";

// Function to fetch weather data and send email
const fetchWeatherAndSendEmail = async () => {
   try {
      const users = await User.find().lean();
      const emailPromises = users.map(async (user) => {
         const { latitude, longitude } = user.location;
         const email = user.email;
         const currentDate = new Date();
         const timestamp = Math.floor(currentDate.getTime() / 1000); // Use current date

         const weatherData = await getWeather(latitude, longitude, timestamp);
         await sendWeatherReport(email, weatherData);

         console.log(
            `Email sent to ${email}: Current weather - ${weatherData.weatherText}, Temperature - ${weatherData.main.temp}°C.`
         );
      });

      await Promise.all(emailPromises);
      console.log("All emails have been sent successfully");
   } catch (error) {
      console.error("Error fetching weather or sending email:", error);
   }
};

// Schedule the job to run every 3 hours
cron.schedule("0 */3 * * *", fetchWeatherAndSendEmail);

console.log("Cron job scheduled to run every 3 hours");

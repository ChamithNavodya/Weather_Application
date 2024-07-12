import nodemailer from "nodemailer";

// Send email using Nodemailer
export const sendWeatherReport = async (to, weatherData) => {
   try {
      let transporter = nodemailer.createTransport({
         service: "gmail",
         user: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            type: "login",
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
         },
      });

      let mailOptions = {
         from: process.env.EMAIL,
         to,
         subject: "Weather Report",
         text: `Current weather in your location: ${weatherData.weather[0].description}, temperature: ${weatherData.main.temp}°C.`,
      };

      await transporter.sendMail(mailOptions);
   } catch (error) {
      throw error;
   }
};

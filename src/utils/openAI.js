import OpenAI from "openai";

const openai = new OpenAI();

export const generateWeatherText = async () => {
   const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
   });

   console.log(completion.choices[0]);
};

// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//    apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // Generate weather text using OpenAI API
// export const generateWeatherText = async (description, temperature) => {
//    const prompt = `Generate a friendly weather report based on the following data: Description: ${description}, Temperature: ${temperature}°C.`;
//    const response = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt,
//       max_tokens: 50,
//    });
//    return response.data.choices[0].text.trim();
// };

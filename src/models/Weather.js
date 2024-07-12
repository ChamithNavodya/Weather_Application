import { Schema, model } from "mongoose";

const weatherSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   weatherData: {
      type: Map,
      of: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Weather = model("Weather", weatherSchema);

export default Weather;

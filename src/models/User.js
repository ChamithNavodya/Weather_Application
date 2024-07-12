import { Schema, model } from "mongoose";

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
   },
   location: {
      latitude: {
         type: Number,
         required: true,
      },
      longitude: {
         type: Number,
         required: true,
      },
   },
   password: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const User = model("User", userSchema);

export default User;

import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Using custom string ID
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: String,
    endDate: String,
    image: String,
  },
  { collection: "courses" }
); // Specifying the collection name
export default courseSchema;

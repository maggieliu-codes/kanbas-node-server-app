import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Using custom string ID for lessons
    name: { type: String, required: true },
    description: { type: String, required: true },
    module: { type: String, required: true }, // Reference to the parent module
  },
  { _id: false }
); // Prevent Mongoose from creating an additional _id for subdocuments

const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Using custom string ID for modules
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true }, // Assuming this is a reference to the course ID
    lessons: [lessonSchema], // Embedding lesson schema as an array of subdocuments
  },
  { collection: "modules" }
); // Specifying the collection name

const ModuleModel = mongoose.model("Module", moduleSchema);

export default ModuleModel;

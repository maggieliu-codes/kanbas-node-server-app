import CourseModel from "./model.js"; // Import the Mongoose model you've defined for courses

// Create a new course in the database
export const createCourse = async (courseData) => {
  const course = new CourseModel(courseData);
  return await course.save();
};

// Retrieve all courses from the database
export const findAllCourses = async () => {
  return await CourseModel.find();
};

// Retrieve a single course by ID from the database
export const findCourseById = async (id) => {
  return await CourseModel.findById(id);
};

// Update a course by ID in the database
export const updateCourseById = async (id, courseData) => {
  return await CourseModel.findByIdAndUpdate(id, courseData, { new: true });
};

// Delete a course by ID from the database
export const deleteCourseById = async (id) => {
  return await CourseModel.findByIdAndDelete(id);
};

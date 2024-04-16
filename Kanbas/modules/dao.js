import ModuleModel from "./schema.js"; // Adjusted to import directly from schema.js

// Create a new module in the database
export const createModule = async (moduleData) => {
  const module = new ModuleModel(moduleData);
  return await module.save();
};

// Retrieve all modules for a specific course from the database
export const findModulesByCourse = async (courseId) => {
  return await ModuleModel.find({ course: courseId });
};

// Retrieve a single module by ID from the database
export const findModuleById = async (moduleId) => {
  return await ModuleModel.findById(moduleId);
};

// Update a module by ID in the database
export const updateModuleById = async (moduleId, moduleData) => {
  return await ModuleModel.findByIdAndUpdate(moduleId, moduleData, {
    new: true,
  });
};

// Delete a module by ID from the database
export const deleteModuleById = async (moduleId) => {
  return await ModuleModel.findByIdAndDelete(moduleId);
};

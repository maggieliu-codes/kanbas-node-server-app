import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const deleteCourse = async (req, res) => {
    await dao.deleteCourseById(req.params.id);
    res.sendStatus(204);
  };

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  };

  const updateCourse = async (req, res) => {
    const updatedCourse = await dao.updateCourseById(req.params.id, req.body);
    if (!updatedCourse) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(updatedCourse);
  };

  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
}

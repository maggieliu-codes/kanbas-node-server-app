import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = await dao.createModule({
      ...req.body,
      course: req.params.cid,
    });
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    await dao.deleteModuleById(req.params.mid);
    res.sendStatus(204);
  };

  const findModulesByCourse = async (req, res) => {
    const modules = await dao.findModulesByCourse(req.params.cid);
    res.json(modules);
  };

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.mid);
    if (!module) {
      res.status(404).send("Module not found");
      return;
    }
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const updatedModule = await dao.updateModuleById(req.params.mid, req.body);
    if (!updatedModule) {
      res.status(404).send("Module not found");
      return;
    }
    res.json(updatedModule);
  };

  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.get("/api/courses/:cid/modules", findModulesByCourse);
  app.get("/api/modules/:mid", findModuleById);
  app.put("/api/modules/:mid", updateModule);
}

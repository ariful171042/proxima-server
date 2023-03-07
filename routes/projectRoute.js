const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");
const requireAuth = require("../middlewares/requireAuth");
//router
const router = express.Router();

router.use(requireAuth);

// Get all Project
router.get("/", getAllProjects);

// get single project
router.get("/:id", getSingleProject);
//post a new project
router.post("/", postProject);

//DELETE a project
router.delete("/:id", deleteProject);

//UPDATE Project
router.patch("/:id", updateProject);
module.exports = router;

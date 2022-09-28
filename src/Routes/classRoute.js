const express = require("express");
const tokenAuth = require("../Middlewares/tokenAuth");
const classController = require("../Controllers/classController");
const router = express.Router();

router.route("/create-class").post(tokenAuth, classController.createClass);
router.route("/").get(classController.getClasses);
router
  .route("/:id")
  .delete(tokenAuth, classController.deleteClass)
  .put(tokenAuth, classController.updateClass)
  .get(tokenAuth, classController.getSingleClass);

module.exports = router;

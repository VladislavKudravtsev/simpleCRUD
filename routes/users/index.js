const router = require("express").Router();
const userController = require("../../controllers/userController");

router.use("/:userId/posts", require("./userPosts"));

router.get("/", userController.list);
router.get("/:userId", userController.findById);
router.post("/", userController.insert);
router.patch("/:userId", userController.patchById);
router.delete("/:userId", userController.removeById);

module.exports = router;

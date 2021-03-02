const router = require("express").Router({ mergeParams: true });
const postController = require("../controllers/postController");

router.get("/", postController.list);
router.get("/:postId", postController.findById);
router.post("/", postController.insert);
router.patch("/:postId", postController.patchById);
router.delete("/:postId", postController.removeById);

module.exports = router;

const express = require("express")
const router = express.Router();
const postController = require("../controllers/postController")


router.get("/search",postController.searchPostByText)
router.get("/",postController.getAllPost);
router.get("/:id",postController.getPostById);
router.post("/",postController.createPost);
router.delete("/:id",postController.deletePost)

module.exports = router;
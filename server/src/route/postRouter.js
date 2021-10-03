const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.post("/", postController.create);

router.post("/like", postController.getAllLikes);
router.put("/like", postController.changeLikeStatus);
router.get('/like/:id', postController.getLikesPosts);

router.get("/post", postController.getAllPosts);
router.post("/post", postController.getAllPosts);

router.get("/post/:id", postController.getPost);

module.exports = router;

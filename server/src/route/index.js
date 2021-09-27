const router = require("express").Router();
const userRouter = require("./userRoter");
const postRouter = require("./postRouter");

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;

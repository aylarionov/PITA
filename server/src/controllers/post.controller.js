const { Post, Tag, Tag_Post } = require("../db/models");

const create = async (req, res, next) => {
  try {
    const { title, body, private, tag, insight, UserId } = req.body.date;

    if (title && body && tag && UserId) {
      const post = await Post.create({
        name: title,
        body,
        private,
        insight,
        UserId,
      });

      const arrayTag = tag.replace(/\s/g, "").toLowerCase().split("#");

      for (let i = 0; i < arrayTag.length; i++) {
        const tag = arrayTag[i];

        if (tag) {
          const tagIn = await Tag.findOne({ where: { name: tag } });

          if (tagIn) {
            console.log(tagIn.id, post.id);
            await Tag_Post.create({ TagId: tagIn.id, PostId: post.id });
            await tagIn.update({ count: ++tagIn.count });
          } else {
            const newTag = await Tag.create({ name: tag, count: 1 });
            console.log({ newTag, post });
            await Tag_Post.create({ TagId: newTag.id, PostId: post.id });
          }
        }
      }

      res.sendStatus(200);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};

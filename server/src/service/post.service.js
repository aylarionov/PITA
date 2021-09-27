const { Post, Tag, Tag_Post } = require("../db/models");

const createPost = async (title, body, privateStatus, tag, insight, UserId) => {
  const post = await Post.create({
    title,
    body,
    private: privateStatus,
    insight,
    UserId,
  });
  
  const arrayTag = tag.replace(/\s/g, "").toLowerCase().split("#");
  const postTags = [];

  for (let i = 0; i < arrayTag.length; i++) {
    const tag = arrayTag[i];

    if (tag) {
      postTags.push(tag);
      const tagIn = await Tag.findOne({ where: { name: tag } });

      if (tagIn) {
        await Tag_Post.create({ TagId: tagIn.id, PostId: post.id });
        await tagIn.update({ count: ++tagIn.count });
      } else {
        const newTag = await Tag.create({ name: tag, count: 1 });

        await Tag_Post.create({ TagId: newTag.id, PostId: post.id });
      }
    }
  }
  
  return { title, body, private: privateStatus, tags: Array.from(new Set(postTags)) };
};

module.exports = {
  createPost,
};

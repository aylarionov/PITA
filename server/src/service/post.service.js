const { Post, Tag, Tag_Post } = require("../db/models");

const createPost = async (title, body, privateStatus, tag, insight, UserId) => {
  const post = await Post.create({
    title: title.trim(),
    body: body.trim(),
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

  return {
    title,
    body,
    private: privateStatus,
    tags: Array.from(new Set(postTags)),
  };
};

const getAllPosts = async (id = null) => {
  if (id) {
    const posts = await Post.findAll({
      where: { UserId: id },
      attributes: ["title", "body", "private", "insight"],
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    posts.forEach((post) => {
      post = tagsHandler(post);
    });

    return posts;
  }

  const posts = await Post.findAll({
    where: { private: false },
    attributes: ["title", "body", "insight"],
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  posts.forEach((post) => {
    post = tagsHandler(post);
  });
  return posts;
};

const getPost = async (id) => {
  const post = await Post.findOne({
    where: { id: id },
    attributes: ["title", "body"],
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  return tagsHandler(post);
};

function tagsHandler(post) {
  const tags = [];
  post.dataValues.tags.forEach((tag) => {
    tags.push(`#${Object.values(tag.dataValues)}`);
  });

  post.dataValues.tags = tags.join(" ");
  return post;
}

module.exports = {
  createPost,
  getPost,
  getAllPosts,
};

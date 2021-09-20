import Icon from "../UI/Icon/Icon";
import like from "../../icons/like.png";

import post from "./post.module.css";

const Post = () => {
  return (
    <div className={post.container}>
      <div className={post.header}>
        <h2 className={post.title}>Title</h2>
        <Icon className={post.icon} src={like} />
      </div>

      <div className={post.body}>
        <p className={post.text}>Body</p>
        <p className={post.tags}>tags</p>
      </div>
    </div>
  );
};

export default Post;

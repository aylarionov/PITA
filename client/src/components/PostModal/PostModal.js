import Icon from "../UI/Icon/Icon";
import like from "../../icons/heart.svg";

import post from "./postmodal.module.css";
import { useState } from "react";

const PostModal = () => {
  const [active, setActive] = useState(false);

  const handler = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={post.container}>
      <div className={post.header}>
        <h2 className={post.title}>Title</h2>
        <Icon
          active={active}
          handler={handler}
          className={post.icon}
          src={like}
        />
      </div>

      <div className={post.body}>
        <p className={post.text}>Body</p>
        <p className={post.tags}>tags</p>
      </div>
    </div>
  );
};

export default PostModal;

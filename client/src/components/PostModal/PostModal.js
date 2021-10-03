import Icon from "../UI/Icon/Icon";
import like from "../../icons/heart.svg";

import post from "./postmodal.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../redux/actions/likesAC";

const PostModal = ({ data }) => {
  const [active, setActive] = useState(false);
  const { likes, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (likes.find((id) => id === data.id)) {
      return setActive(true);
    }
    setActive(false);
  }, [data.id]);

  const handler = () => {
    setActive((prev) => !prev);
    dispatch(changeStatus(user.id, data.id));
  };
  console.log(active);
  return (
    <>
      <div className={post.container}>
        <div className={post.header}>
          <h2 className={post.title}>{data?.title}</h2>
          <Icon
            active={active}
            handler={handler}
            className={post.icon}
            src={like}
          />
        </div>

        <div className={post.body}>
          <p className={post.text}>{data?.body}</p>
          <p className={post.tags}>{data?.tags}</p>
        </div>
      </div>
    </>
  );
};

export default PostModal;

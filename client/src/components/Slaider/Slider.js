import { useDispatch } from "react-redux";
import { setModalActive } from "../../redux/actions/modalAC";
import PostModal from "../PostModal/PostModal";
import Arrow from "../UI/Arrow/Arrow";
import Modal from "../UI/Modal/Modal";
import Post from "../UI/Post/Post";
import slider from "./slider.module.css";

const Slider = ({ showAbility, index, posts, setIndex }) => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(setModalActive(true));
  };
  return (
    <div className={slider.postWrapper}>
      <Arrow setIndex={setIndex} maxCount={posts.length}>
        <Post
          data={
            posts.length > 0
              ? posts[index]
              : { body: "Пока никто не поделился инсайтами(" }
          }
          handler={handler}
          showAbility={showAbility}
        />
      </Arrow>
      <Modal>
        <PostModal data={posts[index]} />
      </Modal>
    </div>
  );
};

export default Slider;

import Button from "../Button/Button";
import post from "./post.module.css";

const Post = (props) => {
  return (
    <div className={post.wrapper}>
      <h2 className={post.title}>title</h2>
      <div className={post.text}>
        <p>loaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfds</p>
      </div>
      <Button>Открыть</Button>
    </div>
  );
};

export default Post;

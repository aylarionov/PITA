import Button from "../Button/Button";
import post from "./post.module.css";

const Post = (props) => {
  const postClasses = [post.wrapper];

  if (props.ability) {
    postClasses.push(post.background);
  }

  return (
    <div className={postClasses.join(" ")}>
      <h2 className={post.title}>title</h2>
      <div className={post.text}>
        <p className={post.post}>
          loaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfdsloaderReducersdfdsfdsfdsfdsfdsfsdfds
        </p>
      </div>
      <Button onClick={() => props.setActive(true)}>Открыть</Button>
    </div>
  );
};

export default Post;

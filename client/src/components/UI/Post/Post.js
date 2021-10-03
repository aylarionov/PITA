import Button from "../Button/Button";
import post from "./post.module.css";

const Post = ({ data, handler, showAbility }) => {
  const postClasses = [post.wrapper];

  if (showAbility) {
    postClasses.push(post.background);
  }
  
  return (
    <div className={postClasses.join(" ")}>
      <h2 className={post.title}>{data?.title}</h2>
      <div className={post.text}>
        <p className={post.post}>{data?.body}</p>
      </div>
      <Button disabled={data?.title ? false : true} onClick={handler}>Открыть</Button>
    </div>
  );
};

export default Post;

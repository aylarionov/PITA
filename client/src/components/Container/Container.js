import Post from "../UI/Post/Post";
import container from "./container.module.css";

const Container = ({ children, title }) => {
  return (
    <div className={container.container}>
      <h2 className={container.title}>{title}</h2>
      <div className={container.wrapper}>
        <div className={container.box}>{children}</div>
      </div>
    </div>
  );
};

export default Container;

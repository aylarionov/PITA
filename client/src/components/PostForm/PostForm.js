import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Toggle from "../UI/Toggle/Toggle";

import postForm from "./postForm.module.css";

const PostForm = ({ title, P }) => {
  const choice = { left: "Видно всем", rigth: "Видно мне" };
  const postClasses = [postForm.container];

  if (!P) {
    postClasses.push(postForm.background);
  }

  return (
    <div className={postClasses.join(" ")}>
      <div className={postForm.header}>
        <h2 className={postForm.title}>{title}</h2>
        <div className={postForm.toggle}>
          <Toggle choice={choice} />
        </div>
      </div>

      <div className={postForm.form}>
        <Input
          placeholder="Тема, название, заглавная часть"
          autocomplete="off"
        />
        <Textarea placeholder="Сама суть..." />
        <Input placeholder="#tags" autocomplete="off" />
        <Button>Отправить</Button>
      </div>
    </div>
  );
};

export default PostForm;

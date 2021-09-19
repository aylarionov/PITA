import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Toggle from "../UI/Toggle/Toggle";

import postForm from "./postForm.module.css";

const PostForm = () => {
  const [publ, setPublic] = useState(false);

  function handler() {
    setPublic((prev) => !prev);
  }

  return (
    <div className={postForm.container}>
      <dib className={postForm.header}>
        <h2 className={postForm.title}>Место для проблем</h2>
        <div className={postForm.toggle}>
          <p className={postForm.text}>{publ ? "Видно всем" : "Видно мне"}</p>
          <Toggle handler={handler} />
        </div>
      </dib>

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

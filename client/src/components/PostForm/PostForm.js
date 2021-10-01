import { usePost } from "../../hooks/usePost";
import Button from "../UI/Button/Button";
import Error from "../UI/Error/Error";
import Input from "../UI/Input/Input";
import Response from "../UI/Response/Response";
import Textarea from "../UI/Textarea/Textarea";
import Toggle from "../UI/Toggle/Toggle";

import postForm from "./postForm.module.css";

const PostForm = ({ titl, P }) => {
  const choice = { left: "Видно всем", rigth: "Видно мне" };
  const postClasses = [postForm.container];

  const {
    title,
    body,
    tag,
    privateStatus,
    setPrivateStatus,
    handler,
    postError,
    insight,
    send,
  } = usePost();

  if (!P) {
    postClasses.push(postForm.background);
  }
  return (
    <div className={postClasses.join(" ")}>
      <div className={postForm.header}>
        <h2 className={postForm.title}>{titl}</h2>
        <div className={postForm.toggle}>
          <Toggle choice={choice} setChoice={setPrivateStatus} />
        </div>
      </div>
      <div className={postForm.form}>
        {send ? (
          <Response>Ваш пост успешно создан!</Response>
        ) : (
          <>
            <Input
              placeholder="Тема, название, заглавная часть"
              autoComplete="off"
              value={title.value}
              onBlur={(e) => title.onBlur(e)}
              onChange={(e) => title.onChange(e)}
            />
            <Textarea
              placeholder="Сама суть..."
              value={body.value}
              onBlur={(e) => body.onBlur(e)}
              onChange={(e) => body.onChange(e)}
            />
            <Input
              placeholder="#tags"
              autoComplete="off"
              value={tag.value}
              onBlur={(e) => tag.onBlur(e)}
              onChange={(e) => tag.onChange(e)}
            />
            <Button
              onClick={() =>
                handler(
                  title.value,
                  body.value,
                  tag.value,
                  privateStatus,
                  insight
                )
              }
            >
              Отправить
            </Button>
            {postError.length > 0 && <Error type="post" errors={postError} />}
          </>
        )}
      </div>
    </div>
  );
};

export default PostForm;

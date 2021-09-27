import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { createPost } from "../redux/actions/postsAC";
import { useInput } from "./useInput";

export const usePost = () => {
  const title = useInput("", { isEmpty: true });
  const body = useInput("", { isEmpty: true });
  const tag = useInput("", { isEmpty: true });
  const [privateStatus, setPrivateStatus] = useState(true);
  const user = useSelector((state) => state.user);
  const [postError, setPostError] = useState("");
  const insight = useLocation().pathname === "/ability";

  const router = useHistory();
  const dispatch = useDispatch();

  const handler = async (title, body, tag, privateStatus, insight) => {
    const res = await dispatch(
      createPost(title, body, tag, privateStatus, insight, user.id)
    );

    if (res === "ok") {
      insight ? router.push("/") : router.push("/inspiration");
    } else {
      setPostError(res);
    }
  };

  return {
    title,
    body,
    tag,
    privateStatus,
    setPrivateStatus,
    handler,
    postError,
    insight,
  };
};

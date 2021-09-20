import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "../../components/Post/Post";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import insp from "./i.module.css";

const Inspiration = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return (
    <div className={insp.container}>
      <Post />
    </div>
  );
};

export default Inspiration;

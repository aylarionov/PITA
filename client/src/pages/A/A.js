import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostForm from "../../components/PostForm/PostForm";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import abil from "./a.module.css";

const Ability = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain({ isNotMain: true })), []);

  return (
    <div className={abil.container}>
      <PostForm titl="Вот оно решение!" />
    </div>
  );
};

export default Ability;

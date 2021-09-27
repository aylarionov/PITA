import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostForm from "../../components/PostForm/PostForm";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import abil from "./a.module.css";

const Ability = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return (
    <div className={abil.container}>
      <PostForm title='Вот оно решение!'/>
    </div>
  );
};

export default Ability;

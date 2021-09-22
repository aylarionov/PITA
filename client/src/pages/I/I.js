import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Arrow from "../../components/UI/Arrow/Arrow";
import Button from "../../components/UI/Button/Button";
import Post from "../../components/UI/Post/Post";
import Toggle from "../../components/UI/Toggle/Toggle";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import insp from "./i.module.css";

const Inspiration = () => {
  const dispatch = useDispatch();
  const { postWrapper } = insp;
  const choice = { left: "случайная боль", rigth: "случайный инсайт" };

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return (
    <div className={insp.container}>
      <div className={insp.choiceWrapper}>
        <div className={insp.choiceBox}>
          <Toggle choice={choice} />
          <Button>Выбрать</Button>
        </div>
      </div>
      <div className={postWrapper}>
        <Arrow>
          <Post />
        </Arrow>
      </div>
    </div>
  );
};

export default Inspiration;

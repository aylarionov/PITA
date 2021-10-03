import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slaider/Slider";
import Button from "../../components/UI/Button/Button";
import Toggle from "../../components/UI/Toggle/Toggle";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import { getPublic } from "../../redux/actions/postsAC";
import { indexHandler } from "../../utils/indexHandler";
import insp from "./i.module.css";

const Inspiration = () => {
  const [index, setIndex] = useState(0);
  const { posts } = useSelector((state) => state);
  const [showAbility, setShowAbility] = useState(false);
  const choice = { left: "случайный инсайт", rigth: "случайная боль" };
  const dispatch = useDispatch();

  const data = showAbility
    ? [...posts.filter((el) => el.insight)]
    : [...posts.filter((el) => !el.insight)];

  useEffect(() => {
    dispatch(setIsNotMain(true));
  }, []);

  // useEffect(() => {
  //   dispatch(getPublic());
  // }, []);

  useEffect(() => {
    setIndex(() => indexHandler(data));
  }, []);

  return (
    <div className={insp.container}>
      <div className={insp.choiceWrapper}>
        <div className={insp.choiceBox}>
          <Toggle
            choice={choice}
            setChoice={setShowAbility}
            setIndex={setIndex}
          />
          <Button
            disabled={data[indexHandler(data)]?.title ? false : true}
            onClick={() => setIndex(indexHandler(data))}
          >
            Выбрать
          </Button>
        </div>
      </div>
      <Slider
        posts={data}
        index={index}
        setIndex={setIndex}
        showAbility={showAbility}
      />
    </div>
  );
};

export default Inspiration;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostModal from "../../components/PostModal/PostModal";
import Arrow from "../../components/UI/Arrow/Arrow";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Post from "../../components/UI/Post/Post";
import Toggle from "../../components/UI/Toggle/Toggle";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import insp from "./i.module.css";

const Inspiration = () => {
  const [modalActive, setModalActive] = useState(false);
  const [showAbility, setShowAbility] = useState(false);
  const choice = { left: "случайный инсайт", rigth: "случайная боль" };

  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return (
    <div className={insp.container}>
      <div className={insp.choiceWrapper}>
        <div className={insp.choiceBox}>
          <Toggle choice={choice} setChoice={setShowAbility}/>
          <Button>Выбрать</Button>
        </div>
      </div>
      <div className={insp.postWrapper}>
        <Arrow>
            <Post setActive={setModalActive} ability={showAbility}/>
        </Arrow>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <PostModal />
      </Modal>
    </div>
  );
};

export default Inspiration;

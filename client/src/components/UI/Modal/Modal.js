import { useDispatch, useSelector } from "react-redux";
import { setModalActive } from "../../../redux/actions/modalAC";
import modal from "./modal.module.css";

const Modal = ({ children }) => {
  const { modalActive } = useSelector((state) => state);
  const modalClasses = [modal.container];
  const contentClasses = [modal.content];

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(setModalActive(false));
  };

  if (modalActive) {
    modalClasses.push(modal.active);
    contentClasses.push(modal.contentActive);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={handler}>
      <div
        className={contentClasses.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

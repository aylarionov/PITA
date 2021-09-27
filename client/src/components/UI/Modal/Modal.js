import modal from "./modal.module.css";

const Modal = ({ active, setActive, children }) => {
  const modalClasses = [modal.container];
  const contentClasses = [modal.content];

  if (active) {
    modalClasses.push(modal.active);
    contentClasses.push(modal.contentActive);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={() => setActive(false)}>
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

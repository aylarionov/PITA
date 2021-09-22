import arrow from "./arrow.module.css";

const Arrow = ({ children, ...props }) => {
  const arrowRigth = [arrow.arrow, arrow.right];
  const arrowLeft = [arrow.arrow, arrow.left];

  return (
    <div className={arrow.wrapper}>
      <span {...props} class={arrowLeft.join(" ")} />
      {children}
      <span {...props} class={arrowRigth.join(" ")} />
    </div>
  );
};

export default Arrow;

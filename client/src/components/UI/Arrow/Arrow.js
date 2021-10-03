import arrow from "./arrow.module.css";

const Arrow = ({ children, setIndex, maxCount }) => {
  const arrowRigth = [arrow.arrow, arrow.right];
  const arrowLeft = [arrow.arrow, arrow.left];

  const rigthMove = () => {
    setIndex((prev) => {
      if (prev === maxCount - 1) {
        return (prev = 0);
      }
      return (prev += 1);
    });
  };

  const leftMove = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return (prev = maxCount - 1);
      }
      return (prev -= 1);
    });
  };

  return (
    <div className={arrow.wrapper}>
      <span
        onClick={!!maxCount ? leftMove : null}
        class={arrowLeft.join(" ")}
      />
      <div className={arrow.box}>{children}</div>
      <span
        onClick={!!maxCount ? rigthMove : null}
        class={arrowRigth.join(" ")}
      />
    </div>
  );
};

export default Arrow;

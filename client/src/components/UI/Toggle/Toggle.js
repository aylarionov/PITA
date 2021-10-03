import { useState } from "react";
import toggle from "./toggle.module.css";

const Toggle = ({ choice, setChoice, setIndex = null }) => {
  const [on, setOn] = useState({});

  function toggleHandler() {
    if (on.left) {
      setOn({ right: "18px" });
      setChoice((prev) => !prev);
      
    } else {
      setOn({ left: "18px" });
      setChoice((prev) => !prev);
      if (setIndex) {
        setIndex(0);
      }
    }
  }

  return (
    <div className={toggle.wrapper}>
      <p className={toggle.text}>{on.left ? choice.left : choice.rigth}</p>
      <div className={toggle.body}>
        <div className={toggle.toggle}>
          <i
            className={toggle.indicator}
            onClick={toggleHandler}
            style={on}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Toggle;

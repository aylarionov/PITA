import { useState } from "react";
import toggle from "./toggle.module.css";

const Toggle = ({ choice }) => {
  const [on, setOn] = useState({});

  function toggleHandler(e) {
    if (on.left) {
      setOn({ right: "18px" });
    } else {
      setOn({ left: "18px" });
    }
  }

  return (
    <div className={toggle.wrapper}>
      <p className={toggle.text}>{on.left ? choice.left : choice.rigth}</p>
      <div className={toggle.body}>
        <div className={toggle.toggle}>
          <i
            className={toggle.indicator}
            onClick={(e) => toggleHandler(e)}
            style={on}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Toggle;

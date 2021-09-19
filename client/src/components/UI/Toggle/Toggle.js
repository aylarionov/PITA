import { useState } from "react";
import toggle from "./toggle.module.css";

const Toggle = ({ handler }) => {
  const [on, setOn] = useState({});

  function toggleHandler(e) {
    if (on.left) {
      setOn({ right: "18px" });
      handler();
    } else {
      setOn({ left: "18px" });
      handler();
    }
  }

  return (
    <div className={toggle.body}>
      <div className={toggle.toggle}>
        <i
          className={toggle.indicator}
          onClick={(e) => toggleHandler(e)}
          style={on}
        ></i>
      </div>
    </div>
  );
};

export default Toggle;

import { Link } from "react-router-dom";
import icon from "./icon.module.css";

const Icon = ({ children, src, handler, ...props }) => {
  const iconCleasses = [icon.icon];

  if (props.active) {
    iconCleasses.push(icon.active);
  }

  return (
    <div {...props}>
      <img
        onClick={handler}
        className={iconCleasses.join(" ")}
        alt="icon"
        src={src}
      />
    </div>
  );
};

export default Icon;

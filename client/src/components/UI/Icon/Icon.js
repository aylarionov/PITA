import { Link } from "react-router-dom";
import icon from "./icon.module.css";

const Icon = ({ src, handler, ...props }) => {
  return (
    <div {...props}>
      <img onClick={handler} className={icon.icon} alt="home" src={src} />
    </div>
  );
};

export default Icon;

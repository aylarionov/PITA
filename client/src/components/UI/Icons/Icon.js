import { Link } from "react-router-dom";
import home from "./home.svg";
import icon from "./icon.module.css";

const Icon = () => {
  return (
      <Link className={icon.link} to="/"><img className={icon.icon} alt="home" src={home}/></Link>
    
  );
};

export default Icon;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import about from "./about.module.css";

const About = ({ info }) => {
    const isAuth = useSelector(state => state.isAuth);
    
  return (
    <div className={about.wrapper}>
      <h1>{info.title}</h1>
      {info.text.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {info.showLink && isAuth &&(
        <Button about='true'>
          <Link className={about.link} to={info.link}>{info.showLink}</Link>
        </Button>
      )}
    </div>
  );
};

export default About;

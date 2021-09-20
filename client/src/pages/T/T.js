import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import tools from "./t.module.css";

const Tools = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return <div>Tools</div>;
};

export default Tools;

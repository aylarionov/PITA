import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import abil from "./a.module.css";

const Ability = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return <div>Ability</div>;
};

export default Ability;

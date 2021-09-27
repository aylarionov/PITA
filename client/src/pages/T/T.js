import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Widget from "../../components/UI/Widget/Widget";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import like from "../../icons/like.svg";
import list from "../../icons/list.svg";
import users from "../../icons/users.svg";
import modertools from "../../icons/modertools.svg";

import tools from "./t.module.css";
import Container from "../../components/Container/Container";

const Tools = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setIsNotMain(true)), []);

  return (
    <div className={tools.container}>
      <div className={tools.widgetsNav}>
        <div className={tools.widgetWrapper}>
          <Widget src={like} />
          <Widget src={list} />
          <Widget src={users} />
          <Widget src={modertools} />
        </div>
      </div>
      <Container />
    </div>
  );
};

export default Tools;

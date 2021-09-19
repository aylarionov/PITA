import React from "react";
import { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import { Squares } from "../../components/stylesComponents/Squares";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import showInfo from "../../utils/showInfo";

import main from "./main.module.css";

export default function Main() {
  const [info, setInfo] = useState({ title: "", text: [] });
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setInfo((prev) => ({ ...prev, ...showInfo() }));
    dispatch(setIsNotMain(false))
  }, []);

  const handler = (word, id) => {
    setInfo(showInfo(word, id));
  };

  return (
    <div className={main.container}>
      <About info={info} />
      <Squares handler={handler} links={["P", "I", "T", "A"]} />
    </div>
  );
}

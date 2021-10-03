import React, { useEffect } from "react";
import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import About from "../../components/About/About";
import { Squares } from "../../components/stylesComponents/Squares";
import { setIsNotMain } from "../../redux/actions/isNMAC";
import { getAll } from "../../redux/actions/likesAC";
import { getPublic } from "../../redux/actions/postsAC";
import showInfo from "../../utils/showInfo";

import main from "./main.module.css";

export default function Main() {
  const [info, setInfo] = useState({ title: "", text: [] });
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  useLayoutEffect(() => {
    setInfo((prev) => ({ ...prev, ...showInfo() }));
    dispatch(setIsNotMain(false));
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getAll(user.id))
      dispatch(getPublic())
    }
  }, [])

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

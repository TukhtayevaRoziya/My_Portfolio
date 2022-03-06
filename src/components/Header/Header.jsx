import React from "react";

import style from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={style.typewriter}>
        <h1>Hi, I'm Tukhtayeva Roziya</h1>
        <p id={style.line_1}>React Developer</p>
        <p id={style.line_2}>From Uzbekistan</p>
      </div>
      <div className={style.mainPicture}></div>
    </>
  );
};

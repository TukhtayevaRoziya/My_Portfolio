import React from "react";

import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import TypingEffect from './TypingEffect';

const Header = () => {
  const { t } = useTranslation();

  // const text  = document.getElementById("myName") && document.getElementById("myName").innerText

  // console.log(text);

  return (
    <>
      {/* <TypingEffect text={t("myName")}/> */}
      <div className={style.typewriter}>
        <h1>{t("myName")}</h1>
        <p id={style.line_1}>React Developer</p>
        <p id={style.line_2} style={{ width: "115px" }}>
          From Uzbekistan
        </p>
      </div>
      <div className={style.mainPicture}></div>
    </>
  );
};

export default Header;

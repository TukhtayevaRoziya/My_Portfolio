import React from "react";

import style from "./Header.module.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  // const text  = document.getElementById("myName") && document.getElementById("myName").innerText

  // console.log(text);

  return (
    <>
      <div className={style.typewriter}>
        <h1 id="myName">{t("myName")}</h1>
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

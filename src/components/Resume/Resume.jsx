import React from "react";
import { useTranslation } from "react-i18next";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import coder from "../../assets/girl_coder.jpg";

import style from "./Resume.module.css";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className={style.Resume}>
      <img className={style.picture} src={coder} alt="" />
      <div className={style.block + " " + style.about_me}>
        <h3 className={style.title}>{t("aboutMe")}</h3>
        <p className={style.text}>
          {t("aboutMeText1")}
          <br />
          {t("aboutMeText2")}
        </p>
      </div>
      <div className={style.block + " " + style.extra}>
        <h3 className={style.title}>{t("esucation")}</h3>
        <p className={style.text}>
          {t("educationText")}
        </p>
      </div>
      <div className={style.My_skills}>
        <div className={style.block}>
          <h3 className={style.title1}>{t("mySkill")}</h3>
          <h3 className={style.title}>Front-End</h3>
          <p className={style.text}>
            HTML, CSS (SASS/SCSS/MODULE), JavaScript, JQuery, Bootstrap, Ajax,
            Json, ReactJs, Redux, Redux-thunk, ChartJs, React-router, Ant
            design, Material UI, AOS, Chakra UI, React Bootstrap, Typescript,
            Redux form
          </p>
        </div>
        <div className={style.block}>
          <h3 className={style.title}>{t("additonal")}</h3>
          <p className={style.text}>Git, Github, Axios, Rest API, Figma</p>
        </div>
      </div>
      <div className={style.mine}>
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title}>{t("social")}</h3>
          <div className={style.socials}>
            <ul>
              <li>
                <a className={style.facebook_icon} href>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  className={style.telegram_icon}
                  href="https://t.me/TukhtayevaRoziya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a className={style.instagram_icon} href="/">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  className={style.github_icon}
                  href="https://github.com/tukhtayevaroziya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <a href="mailto:" href></a> */}
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title}>{t("contact")}</h3>
          <div className={style.contact}>
            <a
              href="https://t.me/TukhtayevaRoziya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>{" "}
              @TukhtayevaRoziya
            </a>
            <a href="tel:+998905280770">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +998 905280770
            </a>
            <a
              href="mailto:roziyabegimtuxtayeva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              id={style.mail}
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              roziyabegimtuxtayeva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

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
  return (
    <div className={style.Resume}>
      <img className={style.picture} src={coder} alt="" />
      <div className={style.block + " " + style.about_me}>
        <h3 className={style.title}>About Me</h3>
        <p className={style.text}>
          My name is Roziya. My last name is Tukhtayeva. I am 14 years old. I
          was born in 2008 in Andijan. I live in Uzbekistan. My address is
          Andijan, Erkin street 14. My
          phone number is +998 905280770.
          <br />I love coding because coding is so good. I have half a year of
          experience in coding. I have participated in many start-up projects.
          To date, I have created several useful web pages, which you can see in
          the projects section.
        </p>
      </div>
      <div className={style.block + " " + style.extra}>
        <h3 className={style.title}>Education</h3>
        <p className={style.text}>
          My interest in programming began in the summer of 2020. I've been
          learning programming ever since. I learned the basics of frontend at
          PDP Academy. I learned other knowledge from courses on YouTube
        </p>
      </div>
      <div className={style.My_skills}>
        <div className={style.block}>
          <h3 className={style.title1}>My skills</h3>
          <h3 className={style.title}>Front-End</h3>
          <p className={style.text}>
            HTML, CSS (SASS/SCSS/MODULE), JavaScript, JQuery, Bootstrap, Ajax,
            Json, ReactJs, Redux, Redux-thunk, ChartJs, React-router, Ant
            design, Material UI, AOS, Chakra UI, React Bootstrap, Typescript,
            Redux form
          </p>
        </div>
        <div className={style.block}>
          <h3 className={style.title}>Additonal</h3>
          <p className={style.text}>Git, Github, Axios, Rest API, Figma</p>
        </div>
      </div>
      <div className={style.mine}>
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title}>My social networks</h3>
          <div className={style.socials}>
            <ul>
              <li>
                <a className={style.facebook_icon}>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  className={style.telegram_icon}
                  href="https://t.me/coder_girl1"
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
                  href="https://github.com/roziya2008"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="mailto:"></a>
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title}>For Contact</h3>
          <div className={style.contact}>
            <a
              href="https://t.me/coder_girl1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>{" "}
              @coder_girl1
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

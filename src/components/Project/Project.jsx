import React from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

import oksyG from "../../assets/projects/oksyG.png";
import hotel from "../../assets/projects/hotel.png";
import charismo from "../../assets/projects/charismo.png";
import hydroAdmin from "../../assets/projects/hydroAdmin.png";
import MService from "../../assets/projects/MService.png";
import youthCenter from "../../assets/projects/YouthCenter.png";
import aliExpress from "../../assets/projects/aliExpress.png";
import build from "../../assets/projects/build.png";
import ekabu from "../../assets/projects/ekabu.png";
import buildAdmin from "../../assets/projects/buildAdmin.png";

import "antd/dist/antd.css";
import style from "./Project.module.css";
import { useTranslation } from "react-i18next";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <div className={style.project}>
      <h1 className={style.project_title}>{t("countryName")}</h1>
      <div className={style.project__block}>
        <div className={style.project__block__box}>
          <Image src={oksyG} />
          <h3>Oksy-G Milk Project</h3>
          <p>Technology used: HTML5, Css3, Bootsrap4, JavaScript, jQuery</p>
          <h5>Time spent creating the site: 20 days</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://tukhtayevaroziya.github.io/Oksy-G-Milk-Project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={youthCenter} />
          <h3>Raven Project</h3>
          <p>Technology used: HTML5, Css3, Bootsrap4, JavaScript, jQuery</p>
          <h5>Time spent creating the site: 1 week</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://robiyaxon.github.io/Robiya-coder-Markaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={hotel} />
          <h3>Hotel Project</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            Redux-form
          </p>
          <h5>Time spent creating the site: 2 week</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://tukhtayevaroziya.github.io/hotel-project-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={aliExpress} />
          <h3>AliExpress Clone Project</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            Redux-form, Material Ui, Ant Design
          </p>
          <h5>Time spent creating the site: 5 days</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://robiyaxon.github.io/programmer-girls-React/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={charismo} />
          <h3>Charismo Project</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            Redux-form, TypeScript, Aos, Ant design, Material Ui
          </p>
          <h5>Time spent creating the site: Active</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://tukhtayevaroziya.github.io/charismo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={ekabu} />
          <h3>Mebel Ekabu Project</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            Redux-form, Ant design, Material Ui, react-yandex-maps
          </p>
          <h5>Time spent creating the site: Active</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="https://robiyaxon.github.io/EkabuMebel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={MService} />
          <h3>Mers Shop Project (Real Project)</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            React-query, Swiper, react-yandex-maps, axios, react-i18next,
            react-facebook-login, eact-google-login, Prop-types, Final-form,
            Redux-thunk, i18next
          </p>
          <h5>Time spent creating the site: Active</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="http://178.128.85.100:6002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={build} />
          <h3>Build Project (Real Project)</h3>
          <p>
            Technology used: Css, Bootstrap, React, Redux, React-Redux,
            React-Router, Redux-form, Ant design, Material Ui,
            react-yandex-maps, styled-component, react-i18next, react-bootstrap,
            aos, node-sass
          </p>
          <h5>Time spent creating the site: Active</h5>
          <div className={style.project__block__box__as_btn}>
            <a
              href="http://buildmegaservice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={hydroAdmin} />
          <h3>Hydro Admin Project (Real Project)</h3>
          <p>
            Technology used: Css, Bootstrap, React, Redux, React-Redux,
            React-Router, Redux-form, Ant design, Material Ui, axios, React
            Bootstrap, Final-form, Redux-thunk, Reactstrap
          </p>
          <h5>Teamwork</h5>
          <div className={style.project__block__box__as_btn}>
            <NavLink to="/project">Closed site</NavLink>
          </div>
        </div>
        <div className={style.project__block__box}>
          <Image src={buildAdmin} />
          <h3>Build Admin Project (Real Project)</h3>
          <p>
            Technology used: Css, React, Redux, React-Redux, React-Router,
            Redux-thunk, Ant design, Material Ui, axios
          </p>
          <h5>Teamwork</h5>
          <div className={style.project__block__box__as_btn}>
            <NavLink to="/project">Closed site</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

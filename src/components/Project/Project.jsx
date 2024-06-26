import React from 'react'
import { Image } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import oksyG from '../../assets/projects/oksyG.png'
import hotel from '../../assets/projects/hotel.png'
import charismo from '../../assets/projects/charismo.png'
import hydroAdmin from '../../assets/projects/hydroAdmin.png'
import MService from '../../assets/projects/MService.png'
import youthCenter from '../../assets/projects/YouthCenter.png'
import aliExpress from '../../assets/projects/aliExpress.png'
import build from '../../assets/projects/build.png'
import buildAdmin from '../../assets/projects/buildAdmin.png'
import doctor from '../../assets/projects/doctor.png'
import las from '../../assets/projects/las.png'
import nura from '../../assets/projects/nuraElite.png'
import cyber_sport from '../../assets/projects/cyber_sport.png'
import and_sport from '../../assets/projects/andijan_sport.png'

import 'antd/dist/antd.css'
import style from './Project.module.css'

const Project = () => {
  const { t } = useTranslation()
  const data = [
    {
      id: 0,
      image: nura,
      title: `Nura Elite `,
      technologies: `Css3, React, Yandex Map`,
      time: 1,
      link: 'https://nuraelite.netlify.app/',
    },
    {
      id: 12,
      image: cyber_sport,
      title: `Cyber Sport`,
      technologies: ` Css3, React, Ant design`,
      time: 1,
      link: 'https://cyber-sport.netlify.app/',
    },
    {
      id: 13,
      image: and_sport,
      title: `Andijan Sport`,
      technologies: ` Css3, React, Ant design, React-router-dom, `,
      time: 3,
      link: 'https://andijan-football.netlify.app/',
    },
    {
      id: 1,
      image: oksyG,
      title: `Oksy-G Milk`,
      technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
      time: 20,
      link: 'https://tukhtayevaroziya.github.io/Oksy-G-Milk-Project/',
    },
    {
      id: 2,
      image: hotel,
      title: `Hotel`,
      technologies: ` Css, React, Redux, React-Redux, React-Router,
      Redux-form`,
      time: 14,
      link: 'https://tukhtayevaroziya.github.io/hotel-project-/',
    },
    {
      id: 3,
      image: youthCenter,
      title: `Raven`,
      technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
      time: 7,
      link: 'https://robiyaxon.github.io/Robiya-coder-Markaz/',
    },
    {
      id: 4,
      image: aliExpress,
      title: `AliExpress Clone`,
      technologies: ` Css, React, Redux, React-Redux, React-Router,
      Redux-form, Material Ui, Ant Design`,
      time: 5,
      link: 'https://robiyaxon.github.io/programmer-girls-React/',
    },
    {
      id: 5,
      image: las,
      title: `LAS`,
      technologies: ` Css, React, React-Router, NextJs, Ant Design`,
      time: 5,
      link: 'https://papaya-puffpuff-1aa409.netlify.app/',
    },
    {
      id: 6,
      image: doctor,
      title: `Doctor`,
      technologies: ` Css, React, Redux, React-Redux, React-Router, Ant
      design`,
      time: ' 1,5',
      link: 'https://diplomishi.netlify.app/',
    },
    {
      id: 7,
      image: charismo,
      title: `Charismo`,
      technologies: ` Css, React, Redux, React-Redux, React-Router,
      Redux-form, TypeScript, Aos, Ant design, Material Ui`,
      time: ' 5',
      link: 'https://tukhtayevaroziya.github.io/charismo/',
    },
    {
      id: 8,
      image: MService,
      title: `Mers Shop`,
      technologies: `  Css, React, Redux, React-Redux, React-Router,
      React-query, Swiper, react-yandex-maps, axios, react-i18next,
      react-facebook-login, eact-google-login, Prop-types, Final-form,
      Redux-thunk, i18next`,
      time: ' 5',
      link: 'http://178.128.85.100:6002/',
      condition: `(${t('real') + ' ' + t('project')})`,
    },
    {
      id: 9,
      image: build,
      title: `Build`,
      technologies: `  Css, Bootstrap, React, Redux, React-Redux,
      React-Router, Redux-form, Ant design, Material Ui,
      react-yandex-maps, styled-component, react-i18next, react-bootstrap,
      aos, node-sass`,
      time: ' 7',
      link: 'http://buildmegaservice.com',
      condition: t('real') + t('project'),
    },
    {
      id: 10,
      image: hydroAdmin,
      title: `Hydro Admin`,
      technologies: `  Css, Bootstrap, React, Redux, React-Redux,
      React-Router, Redux-form, Ant design, Material Ui,
      react-yandex-maps, styled-component, react-i18next, react-bootstrap,
      aos, node-sass`,
      time: ' 7',
      condition: t('real') + t('project'),
      close: true
    },
    {
      id: 11,
      image: buildAdmin,
      title: `Build Admin`,
      technologies: ` Css, React, Redux, React-Redux, React-Router,
      Redux-thunk, Ant design, Material Ui, axios`,
      time: ' 7',
      condition: t('real') + t('project'),
      close: true
    },
  ]
  const dataMap = data.map((d) => (
    <div className={style.project__block__box} key={d.id}>
      <Image src={d.image} />
      <h3>
        {d.title} {t('project')} {d.condition}
      </h3>
      <p>{t('technology') + d.technologies}</p>
      {!d.close ? <h5>{t('time') + d.time + ' ' + t('day')}</h5> : <h5>Teamwork</h5>}
      <div className={style.project__block__box__as_btn}>
        {!d.close ? (
          <a href={d.link} target="_blank" rel="noopener noreferrer">
            {t('visit')}
          </a>
        ) : (
          <NavLink to="/project">{t('closedSite')}</NavLink>
        )}
      </div>
    </div>
  ))

  return (
    <div className={style.project}>
      <h1 className={style.project_title}>{t('navbar1')}</h1>
      <div className={style.project__block}>
        {dataMap}
      </div>
    </div>
  )
}

export default Project

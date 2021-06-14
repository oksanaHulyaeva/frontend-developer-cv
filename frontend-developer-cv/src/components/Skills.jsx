import React from 'react';

import { Capture } from './Capture';

export const Skills = (props) => {
  return (
    <section>
      <Capture title={props.isEnglish ? 'Skills' : 'Технологии'}/>
      <div>
        <div className={'flex-2-columns'}>
          <p className={'left'}>{props.isEnglish ? 'Core stack: ' : 'Основные: '}</p>
          <p className={'right'}>HTML5, CSS3/Sass, Javascript (ES6), React, Redux/MobX, 
            Typescript, REST API, Webpack, Gulp, Pug
          </p>
        </div>
        <div className={'flex-2-columns'}>
          <p className={'left'}>{props.isEnglish ? 'Additional skills: ' : 'Другие: '}</p>
          <ul className={'right'}>
            <li>IDE: <span className="accent">Visual Studio Code</span></li>
            <li>
              {props.isEnglish ? 'Design tools: ' : 'Дизайн: '}
              <span className="accent">Figma</span>, Photoshop, 3DMax
            </li>
            <li>
              {props.isEnglish ? 'CSS libraries: ' : 'CSS-библиотеки: '}
              <span className="accent">Bootstrap, Material Design</span>
            </li>
            <li>
              {props.isEnglish ? 'Data base: ' : 'БД: '} Firebase, MySQL
            </li>
            <li>{props.isEnglish ? 
                'Collaboration and task/project management: ' : 
                'Сотрудничество и таск-менеджеры: '}
                <span className="accent">Github,</span> Trello, Bitrix24, Jira</li>
            <li>{props.isEnglish ? 'Foreign languages: ' : 'Иностранные языки: '}
              <span className="accent">English (B1), </span>
              {props.isEnglish ? 
                'experience with native speakers and technical documentation' : 
                'большой опыт с технической документацией'}
            </li>
            <li>
              {props.isEnglish ? 
              'Other skills: CMS (WordPress, Simpla, NetCat), SEO, SMM, microdata, hosting' : 
              'CMS (WordPress, Simpla, NetCat), SEO, SMM, микроразметка, хостинг'}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
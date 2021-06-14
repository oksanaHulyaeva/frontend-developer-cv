import React from 'react';

import { Capture } from './Capture'

export const Experience = (props) => {
  return (
    <section>
      <Capture title={props.isEnglish ? 'Experience' : 'Опыт'} />
      <div className={"experience"}>
        <div className={"decoration"}>
          <div className={"period"}>2014-<br />2021</div>
          <div className={"vertical-line"}></div>
        </div>
        <div className={"company"}>
          <h5>2017-2021&nbsp;&mdash; 
            {props.isEnglish ? ' HTML-coder' : ' HTML-верстальщик'}<br />
            2014-2017&nbsp;&mdash; 
            {props.isEnglish ? ' Website Editor' : ' Редактор веб-сайтов'}
          </h5>
          <p>
            <a
              href="https://gazovoz.com/"
              rel="noopener noreferrer"
              target="_blank">
              {props.isEnglish ? 'LLC Gazovoz' : 'ООО Газовоз'}
            </a>
          </p>
          <p className={"employees"}>
            {props.isEnglish ?
            'St.Petersburg (50 employees), Minsk (10 employees)' :
            'Санкт-Петербург (50 сотрудников), Минск (10 сотрудников)'}
          </p>
          <ul className={"duties"}>
            <li>
              {props.isEnglish ?
                'Participation in web sites development' :
                'Разработка веб-сайтов (интернет-магазины)'}
            </li>
            <li>
              {props.isEnglish ?
                'Configuring and editing templates using ' :
                'Настойка и редактирование шаблонов с использованием '} HTML, PHP, JQuery, MySQL
            </li>
            <li>
            {props.isEnglish ?
                'Developing SEO concept (semantic core, microdata, analytical services)' :
                'Разработка СЕО-концепции (семантическое ядро, микроразметка, аналитика)'} 
            </li>
            <li>
              {props.isEnglish ?
                'Configuring CMS and deploying websites to hostings' :
                'Настройка CMS и загрузка сайта на хостинг'}              
            </li>
            <li>
              {props.isEnglish ?
                'Preparing content (texts, video, pictures)' :
                'Подготовка контента (текст, видео, изображения)'}
            </li>
            <li>
              {props.isEnglish ?
                'Task-management and coordination of developers, copywriters, photo and video operators' :
                'Разработка задач и взаимодействие с дизайнерами, копирайтерами, фото- и видеооператорами'}
            </li>
            <li>
              {props.isEnglish ?
                'Usability testing of web sites' : 'Тестирование сайтов'}
            </li>
            <li>
              {props.isEnglish ?
                'CMM-management' : 'CMM-менеджмент'}
            </li>
          </ul>
        </div>
      </div>
      <div className={"experience"}>
        <div className={"decoration"}>
          <div className={"period"}>2012-<br />2014</div>
          <div className={"vertical-line"}></div>
        </div>
        <div className={"company"}>
          <h5 className={"mobile-only"}>
            2012-2014&nbsp;&mdash; 
            {props.isEnglish ? ' Databases specialist / Cataloguer' : ' Специалист базы данных / Каталогизатор'}
          </h5>
          <h5 className={"screen-only"}>
            {props.isEnglish ? 'Databases specialist / Cataloguer' : 'Специалист базы данных / Каталогизатор'}
          </h5>
          <p>
            <a
              href="http://stroyka.by/"
              rel="noopener noreferrer"
              target="_blank">Stroyka.by
            </a>
          </p>
          <p className={"employees"}>
            {props.isEnglish ? ' Minsk (100-150 employees)' : ' Минск (100-150 сотрудников)'}
          </p>
          <ul className={"duties"}>
            <li>
              {props.isEnglish ? 
              'Working with the database in MS Access (filling, requests, reports)' :
              'Работа с базами данных в MS Access (заполнение, запросы, отчеты)'}
            </li>
            <li>
              {props.isEnglish ? 
              'Testing of the searching algorithm, interacting with developers (using Jira)' :
              'Тестирование поисковых алгоритмов, взаимодействие с разработчиками (в Jira)'}
            </li>
            <li>
              {props.isEnglish ?
              'Working with English spare parts catalogs and technical documentation' :
              'Работа с каталогами и технической документацией (в том числе на английском)'}
            </li>
            <li>
              {props.isEnglish ? 'Writing SEO texts' : 'Написание SEO текстов'}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
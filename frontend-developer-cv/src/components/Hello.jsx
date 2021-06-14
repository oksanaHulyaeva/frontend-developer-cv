import React from 'react';

import { Capture } from './Capture';

export const Hello = (props) => {
  return (
    <section className={'hello'}>
      <Capture title={props.isEnglish ? 'Hello' : 'О себе'}/>
      <p>
        {
          props.isEnglish ? 
          `I'm a pretty skilled web developer (HTML, CSS, CMS, UI), just starting out with React. 
          Had an exciting and a very intensive intro with RSS - a 6 month of great experience 
          in development, current technologies and team working.
          Have high demands on myself and keep learning every day. Interested in features and approaches
          that can help improve the quality of my code - ES6 features, patterns, 
          data structures and algorithms.` :
          `Приветствую. Я довольно опытный веб-мастер (коммерческий опыт с UI, шаблонами и CMS - много верстки,
          немного PHP, JQuery и MySQL), в данный момент изучаю React и углубляю JS.
          Успешно прошла курс RSS FrontEnd - 6 месяцев интенсивной разработки (JS, React, Redux), 
          в том числе командной (Github, Trello). Изучаю и пробую применять на практике 
          паттерны программирования, алгоритмы, структуры данных.`
        }
      </p>
    </section>
  )
}
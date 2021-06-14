import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Capture } from './Capture';

export const Contacts = (props) => {
  return (
    <section className={'contacts'}>
      <Capture title={props.isEnglish ? 'Contacts' : 'Контакты'}/>
      <ul className="contacts">
        <li>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> </p>
          <p>
            {props.isEnglish ? 'Minsk, St. Petersburg' : 'Минск, Санкт-Петербург'}
          </p>
        </li>
        <li>
          <p><FontAwesomeIcon icon={faMobileAlt} className="icon"/> </p>
          <p><a href="tel:+375297549130">+37529 754 9130</a></p>
        </li>
        <li>
          <p><FontAwesomeIcon icon={faEnvelope} className="icon"/></p>
          <p><a href="mailto:aksana.huliayeva@tut.by">aksana.huliayeva@tut.by</a></p></li>
        <li>
          <p><FontAwesomeIcon icon={faGithub} className="icon"/></p>
          <p><a 
              href="https://github.com/oksanaHulyaeva"
              rel="noopener noreferrer"
              target="_blank">oksanaHulyaeva</a>
          </p>
        </li>
        <li>
          <p><FontAwesomeIcon icon={faLinkedin} className="icon"/></p>
          <p><a
              href="https://www.linkedin.com/in/aksana-huliayeva-frontend/"
              rel="noopener noreferrer"
              target="_blank">
                {props.isEnglish ? 'Aksana Huliayeva' : 'Оксана Гуляева'}</a>
          </p>
        </li>
      </ul>
    </section>
  )
}
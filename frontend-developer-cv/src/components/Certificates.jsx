import React from 'react';

import { Capture } from './Capture';
import img from '../assets/sertificate_rss.png'

export const Certificates = (props) => {
  return (
    <section>
      <Capture title={props.isEnglish ? 'Certificates' : 'Сертификаты'}/>
      <div>
        <a
          href={img}
          title="Rolling Scope School Certificate"
          target="_blank"
          rel="noreferrer">
          <img
            src={img}
            alt="Certificate"
            className={"rss-certificate"} />
        </a>
      </div>
    </section>
  )
}

import React from 'react';

import { Capture } from './Capture';

export const Certificates = (props) => {
  return (
    <section>
      <Capture title={props.isEnglish ? 'Certificates' : 'Сертификаты'}/>
      <div>
        <a
          href="../../assets/certificate_rss.png"
          title="Rolling Scope School Certificate"
          target="_blank">
          <div className={"rss-certificate"}></div>
        </a>
      </div>
    </section>
  )
}
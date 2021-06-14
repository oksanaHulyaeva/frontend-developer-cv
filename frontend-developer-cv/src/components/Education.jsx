import React from 'react';

import { Capture } from './Capture';

export const Education = (props) => {
  return (
    <section className='education'>
      <Capture title={props.isEnglish ? 'Education' : 'Образование'}/>
      <div>
        <h4>
          <a
            href="https://rs.school/"
            target="_blank"
            rel="noopener noreferrer"
            className={"outer-links"}>
                Rolling Scope School
          </a>
        </h4>
        <p>{props.isEnglish ? 'JS/React developer' : 'JS/React разработчик'}</p>
      </div>
      <div>
        <h4>
          <a
            href="https://www.sbmt.bsu.by/"
            target="_blank"
            rel="noopener noreferrer"
            className={"outer-links"}>
              {props.isEnglish ? 'SBMT BSU' : 'ИБМТ БГУ'}
          </a>
        </h4>
        <p>{props.isEnglish ? 'Programmer Web Designer' : 'Программист веб-дизайнер'}</p>
      </div>
      <div>
        <h4>
          <a
            href="https://bspu.by/"
            target="_blank"
            rel="noopener noreferrer"
            className={"outer-links"}>
              {props.isEnglish ? 'BSPU' : 'БГПУ'}
          </a>
        </h4>
        <p>{props.isEnglish ? 
          'Teacher of Russian and Belorussian languages' : 
          'Преподаватель руского языка и литературы'}
        </p>
      </div>
    </section>
  )
}

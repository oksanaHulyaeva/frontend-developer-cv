import React from 'react';

import { Capture } from './Capture';

export const More = (props) => {
  return (
    <>
      {
        props.isEnglish ? 
       ( 
        <section>
          <Capture title={'More about myself'}/>
          <p>I'm an open-minded, adaptable and very tolerant person. 
            Fond of literature, astronomy, travelling. Involved in volunteering (homeless animals). 
            Develop and promote account about homeless cats in 
            <a href="https://www.instagram.com/kotiatavdar.minsk/" 
              rel="noopener noreferrer"
              target="_blank"><span className="accent"> Instagram.</span></a>
          </p>
        </section>
       ) : (null)
      }
    </>
  )
}

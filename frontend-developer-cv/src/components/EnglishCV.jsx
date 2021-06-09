import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Capture } from './Capture';


export const EnglishCV = () => {
  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="inner-content">


          <header className="mobile-only">
            <h1>AKSANA <br />HULIAYEVA</h1>
          </header>

          <section className="mobile-only">
            <Capture title={'Hello'}/>
            <p>I'm a&nbsp;pretty skilled web developer (HTML, CSS, CMS, UI), just starting out with React. 
              Had an&nbsp;exciting and a very intensive intro with RSS&nbsp;&mdash; a 6&nbsp;month of great experience 
              in development, current technologies and team working.
              Have high demands on myself and keep learning every day. Interested in features and approaches
              that can help improve the quality of my code&nbsp;&mdash; ES6&nbsp;features, patterns, 
              data structures and algorithms.
            </p>
          </section>

          <section>
            <Capture title={'Contacts'}/>
            <ul className="contacts">
              <li>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> </p>
                <p>Minsk, St. Petersburg</p></li>
              <li>
                <p><FontAwesomeIcon icon={faMobileAlt} className="icon"/> </p>
                <p><a href="tel:+375297549130">+37529 754 9130</a></p></li>
              <li>
                <p><FontAwesomeIcon icon={faEnvelope} className="icon"/></p>
                <p><a href="mailto:aksana.huliayeva@tut.by">aksana.huliayeva@tut.by</a></p></li>
              <li>
                <p><FontAwesomeIcon icon={faGithub} className="icon"/></p>
                <p><a href="https://github.com/oksanaHulyaeva" rel="noopener noreferrer" target="_blank">oksanaHulyaeva</a></p></li>
              <li>
                <p><FontAwesomeIcon icon={faLinkedin} className="icon"/></p>
                <p><a href="https://www.linkedin.com/in/aksana-huliayeva-frontend/" rel="noopener noreferrer" target="_blank">Aksana Huliayeva</a></p></li>
            </ul>
          </section>

          <section>
            <Capture title={'Education'}/>
            <div>
              <h4>
                <a href="https://rs.school/" target="_blank" rel="noopener noreferrer" className={"outer-links"}>
                Rolling Scope School</a>
              </h4>
              <p>JS/React developer</p>
            </div>
            <div>
              <h4>
              <a href="https://www.sbmt.bsu.by/" target="_blank" rel="noopener noreferrer" className={"outer-links"}>
                SBMT BSU</a></h4>
              <p>Programmer Web Designer</p>
            </div>
            <div>
              <h4>
              <a href="https://bspu.by/" target="_blank" rel="noopener noreferrer" className={"outer-links"}>
                BSPU</a></h4>
              <p>Teacher of Russian and Belorussian languages</p>
            </div>
          </section>

          <section>
            <Capture title={'Certificates'}/>
              <div>
                <a href="../assets/sertificate_rss.png" title="Rolling Scope School Certificate" target="_blank">
                  <div className={"rss-certificate"}></div>
                </a>
              </div>
            </section>

        </div>
      </div>

      <div className="right-container">
        <div className="inner-content">

          <header className="screen-only">
            <h1><span className={"accent"}>AKSANA <br />HULIAYEVA</span></h1>
          </header>

          <section className="screen-only">
            <Capture title={'Hello'}/>
            <p>I'm a&nbsp;pretty skilled web developer (HTML, CSS, CMS, UI), just starting out with React. 
              Had an&nbsp;exciting and a very intensive intro with RSS&nbsp;&mdash; a 6&nbsp;month of great experience 
              in development, current technologies and team working.
              Have high demands on myself and keep learning every day. Interested in features and approaches
              that can help improve the quality of my code&nbsp;&mdash; ES6&nbsp;features, patterns, 
              data structures and algorithms.</p>
          </section>

          <section>
            <Capture title={'Skills'} />
            <div>
              <div className={'flex-2-columns'}>
                <div className={'left'}><p>Core stack:</p></div>
                <div className={'right'}><p>HTML5, CSS3/Sass, Javascript (ES6), React, Redux, 
              Typescript, REST API, Webpack, Gulp</p></div>
              </div>
              <div className={'flex-2-columns'}>
                <div className={'left'}><p>Additional skills</p></div>
                  <div className={'right'}>
                    <ul>
                      <li>IDE: <span className="accent">Visual Studio Code</span></li>
                      <li>Design tools: <span className="accent">Figma</span>, Photoshop, 3DMax</li>
                      <li>CSS libraries: <span className="accent">Bootstrap, Material Design</span></li>
                      <li>Data base: Firebase, MySQL</li>
                      <li>Collaboration and task/project management: <span className="accent">Github,</span> Trello, Bitrix24, Jira</li>
                      <li>Foreign languages: <span className="accent">English (B1),</span> experience with native speakers and technical documentation</li>
                      <li>Other skills: CMS (WordPress, Simpla, NetCat), SEO, SMM, microdata, hosting</li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
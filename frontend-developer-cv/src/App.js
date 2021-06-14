import React from "react";
import { useState } from 'react';

import { Controls } from './components/Controls' 
import { Avatar } from './components/Avatar';
import { Header } from './components/Header';
import { Hello } from './components/Hello';
import { Contacts } from './components/Contacts';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { More } from './components/More';
import './App.scss';

// import { EnglishCV } from './components/EnglishCV';
//import { Capture } from './components/Capture'

export const App = () => {
  const [ isEnglish, setIsEnglish ] = useState(true);

  return (
    <>
      <Controls
        func={setIsEnglish}
      />
      <div className="flex-container">

        <div className="dark-container">
          <div className="inner-content">
            <Avatar />
            <Header isEnglish={isEnglish} />
            <Hello isEnglish={isEnglish} />
            <Contacts isEnglish={isEnglish} />
            <Education isEnglish={isEnglish} />
            <Certificates isEnglish={isEnglish} />
          </div>
        </div>
        <div className="light-container">
          <div className="inner-content">
            <Header isEnglish={isEnglish} />
            <Hello isEnglish={isEnglish} />
            <Skills isEnglish={isEnglish} />
            <Experience isEnglish={isEnglish} />
            <More isEnglish={isEnglish} />
          </div>
        </div>
      </div>
    </>
  );
};
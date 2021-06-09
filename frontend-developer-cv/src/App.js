import React from "react";
import { useState } from 'react';

import { Controls } from './components/Controls' 
import { Avatar } from './components/Avatar';
import './App.scss';

import { EnglishCV } from './components/EnglishCV';
//import { Capture } from './components/Capture'

export const App = () => {
  const [ isEnglish, setIsEnglish ] = useState(true);

  return (
    <>
      <Controls
        func={setIsEnglish}
      />
      <div className="flex-container">
        <div className="left-container">
          <div className="inner-content">
          <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};
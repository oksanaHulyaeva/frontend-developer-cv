import React from 'react';

export const Header = (props) => {
  return (
    <header>
      <h1>
        {props.isEnglish ? 'Aksana' : 'Оксана'} <br />
        {props.isEnglish ? 'Huliayeva' : 'Гуляева'}
      </h1>
    </header>
  )
}

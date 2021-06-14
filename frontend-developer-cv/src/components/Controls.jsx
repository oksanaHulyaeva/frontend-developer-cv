import React from 'react';

export const Controls = (props) => {
  const clickHandler = (e) => {
    if(e.target.innerText === 'En') {
      props.func(true)
    } else {
      props.func(false);
    }
  }

  return (
    <nav className={'controls'}>
      <ul>
        <li>
          <button 
            onClick={clickHandler}
            onTouchEnd={clickHandler}
            className={props.isEnglish ? 'active-button' : ''}>
              En
          </button>
        </li>
        <li>
          <button
            onClick={clickHandler}
            onTouchEnd={clickHandler}
            className={props.isEnglish ? '' : 'active-button'}>
              Ru
          </button>
        </li>
      </ul>
    </nav>
  )
}

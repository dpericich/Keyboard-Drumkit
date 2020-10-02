import { useState, useEffect } from 'react';

const letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

const addClass = (key, selector, classToAdd) => {
  if (letters.includes(key)) {
    let elem = document.querySelector(`.${key}.${selector}`)
    elem.className += ` ${classToAdd}`;
  }
}

const removeClass = (key, selector, classToRemove) => {
  if (letters.includes(key)) {
    let elem = document.querySelector(`.${key}.${selector}`)
    elem.classList.remove(`${classToRemove}`)
  }
}

const playSound = (key) => {
  if (letters.includes(key)) { 
    let audio = document.getElementById(key)
    audio.currentTime = 0;
    audio.play()}
}

export  const useKeyPress = callback => {
  const [keyPressed, setKeyPressed] = useState();
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback && callback(key);
        playSound(key); 
        addClass(key, 'key-style', 'key-style-active');
        addClass(key, 'letter-style', 'letter-style-active');      
      }
    };

    const upHandler = ({key}) => {
      removeClass(key, 'key-style', 'key-style-active');
      removeClass(key, 'letter-style', 'letter-style-active');
      setKeyPressed(null);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });
  return keyPressed;
};

import { useState, useEffect } from 'react';

const letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

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
      }
    };
    const upHandler = (key) => {
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

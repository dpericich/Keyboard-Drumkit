import React from 'react';
import './Key.css';

const Key = ({letter, char, sound}) => {
    return(
        <div className={`${letter} key-style`}>
            <div className={`${letter} letter-style`}>
                <audio className="drum" src={sound} id={letter}/>
                {letter}
            </div>
        </div>
    )
}

export default Key;
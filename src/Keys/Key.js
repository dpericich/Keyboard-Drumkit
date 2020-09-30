import React from 'react';

const Key = ({letter, char, sound}) => {
    return(
        <div style={keyStyle}>
            <div style={letterStyle}>
                <audio className="drum" src={sound} id={letter}/>
                {letter}
            </div>
        </div>
    )
}

const keyStyle = { 
    border: "5px solid limegreen",
    borderRadius: '5px',
    width: '50px',
    height: '50px',
    margin: '35px',
    display: 'flex',
    flexDireciton: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const letterStyle = {
    color: 'limegreen',
}

export default Key;
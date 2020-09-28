import React from 'react';

const Key = ({letter, char, sound}) => {
    let checkKeyDown = (event) => {
        console.log(event.key)
        if (event.key === char) {
            alert(`You pressed ${char}`)
        }
    }

    function handleKeyDown(event) {
        if(event.keyCode === 65) {
           console.log("the key was pressed") 
        }
    }

    return(
        <div style={keyStyle} onKeyDown={handleKeyDown}>
            <div style={letterStyle}>
                <audio className="drum" src={sound} />
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
    margin: '40px',
    display: 'flex',
    flexDireciton: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const letterStyle = {
    color: 'limegreen',
}

export default Key;
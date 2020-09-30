import React from 'react';
import Key from './Key';
import {keyNotes} from './keyNotes';
import {useKeyPress} from './useKeyPress';
import RecordDongle from './RecordDongle';

const Keypad = () => {
    useKeyPress(key => console.log(key))
    return(
        <div style={keypadStyle}>
            {keyNotes.map(key => <Key key={key.char} letter={key.letter} char={key.char} sound={key.soundFile} />)}
        </div>
    )
};

const keypadStyle={
    border: "10px solid limegreen",
    borderRadius : "7.5px",
    marginTop : '5%',
    width: "30%",
    height: "30%",
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

}

export default Keypad;
import React, {useState} from 'react';

const RecordDongle = () => {
    const [isRecording, setIsRecording] = useState(false);

    return(
        <div style={buttonContainerStyle}>
            <button style={buttonStyleOn}>Record</button>
            <button style={buttonStyleOn}>Stop</button>
        </div>
    )
}

const buttonContainerStyle = {
    width: "200%",
    height: "50px"
}

const buttonStyleOn = {
    backgroundColor: 'limegreen',
    border: 'none',
    width: "50%",
    height: "100%"
    borderRadius

}

export default RecordDongle;
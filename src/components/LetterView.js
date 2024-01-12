import React from "react";
import './Letter.css';

function LetterView({date,textTo,textDetail, textFrom}){
    return (
        <div className="App-letter-container">
            <p className="App-letter-text-date">{date}</p>
            <div className="App-letter-bar"></div>
            <p className="App-letter-text-To">눈이 내리는 날, {textTo}에게</p>
            <p className="App-letter-text">{textDetail}</p>
            <p className="App-letter-text-From">- {textFrom}이가</p>
        </div>
    );
}

export default LetterView;
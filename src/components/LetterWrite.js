import React, {useState} from "react";
import './Letter.css';

function LetterWrite({date, textTo, textFrom}){
    //리렌더링을 위한 useState
    const [text, setText] = useState('');
    return (
        <div className="App-letter-container">
            <p className="App-letter-text-date">{date}</p>
            <div className="App-letter-bar"></div>
            <p className="App-letter-text-To">눈이 내리는 날, {textTo}에게</p>            
            <textarea className="App-letter-input" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}></textarea>
            <p className="App-letter-text-From">- {textFrom}이가</p>
        </div>
    );
}

export default LetterWrite;
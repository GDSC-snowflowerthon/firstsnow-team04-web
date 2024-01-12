import React, {useState} from "react";
import Button from '../components/Button';

import './Letter.css';

function LetterWrite({date, textTo, textFrom}){
    //리렌더링을 위한 useState
    const [text, setText] = useState('');
    const handleButtonClick = () => {
        if (text.trim() === '') {
            // If text is empty, show an alert
            alert('내용을 작성해주세요');
        } else {
            // If text is not empty, log to console or perform any other action
            console.log({ text });
            console.log(text);
        }
    };

    return (
        <div>
            <div className="App-letter-container">
                <p className="App-letter-text-date">{date}</p>
                <div className="App-letter-bar"></div>
                <p className="App-letter-text-To">눈이 내리는 날, {textTo}에게</p>            
                <textarea 
                    className="App-letter-input" 
                    value={text} 
                    onChange={(e)=>{
                        setText(e.target.value);
                }}></textarea>
                <p className="App-letter-text-From">- {textFrom}이가</p>
            </div>
            <Button func={handleButtonClick} className="writeMailPage-Button" color="white" text="완료"></Button>
        </div>
    );
}

export default LetterWrite;
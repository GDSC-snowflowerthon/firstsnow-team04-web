import React from "react";
import iconDirection from '../assets/direction-left.svg';

function TitleMailbox({ userName }){
    return (
    <div className="App-title-mailbox">
        <img src={iconDirection} alt="back button Image" className='App-title-mailbox-back'/>
        <p className="App-title-mailbox-text-bold">00님</p>
        <p className="App-title-mailbox-text">의 우편함</p>
    </div>
    );
}

export default TitleMailbox;
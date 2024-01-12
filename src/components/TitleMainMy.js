import React from "react";
import "./Header.css";

function TitleMainMy({userName, mailboxOpen}){
    const text = mailboxOpen?("편지들이 기다리고 있어요!"):("첫눈이 오기를 기다려보세요!");
    return (
        <div className="App-title-main">
            <p className="App-title-main-text-bold">{userName}님,</p>
            <p className="App-title-main-text">{text}</p>
        </div>
    );
}
export default TitleMainMy;
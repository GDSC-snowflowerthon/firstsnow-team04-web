import React from "react";

function TitleMailboxWrite({ userName }){
    return (
    <div className="App-title-mailbox-write">
        <p className="App-title-mailbox-write-text-bold">{userName}님</p>
        <p className="App-title-mailbox-write-text">에게 마음을 전달하세요</p>
    </div>
    );
}

export default TitleMailboxWrite;
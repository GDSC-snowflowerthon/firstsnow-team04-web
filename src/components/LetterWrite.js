import React, { useState } from "react";
import Button from "../components/Button";

import "./Letter.css";

function LetterWrite({ date, textTo, textFrom, id }) {
  //리렌더링을 위한 useState
  const [text, setText] = useState("");
  const handleButtonClick = async () => {
    if (text.trim() === "") {
      // If text is empty, show an alert
      alert("내용을 작성해주세요");
    } else {
      const mail = {
        recipient_id: id,
        title: "제목",
        content: text,
      };
      console.log(mail);
      await fetch("./api/v1/letter/send-letter", {
        method: "POST",
        body: JSON.stringify(mail),
      });
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
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <p className="App-letter-text-From">- {textFrom}</p>
      </div>
      <Button
        onclick={handleButtonClick}
        className="writeMailPage-Button"
        color="white"
        text="완료"
      ></Button>
    </div>
  );
}

export default LetterWrite;

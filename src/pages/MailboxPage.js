import "./MailboxPage.css";
import fog from "../assets/fog.svg";
import TitleMailbox from "../components/TitleMailbox";
import Envelope from "../components/Envelope";
import { useRef } from "react";

const MailboxPage = () => {
  const name = "const"; //user name

  const envelopeData = [
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "sender" },
    { is_open: "open", sender_id: "sender_id" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "Sender" },
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "sender" },
    { is_open: "open", sender_id: "sender_id" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "Sender" },
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "sender" },
    { is_open: "open", sender_id: "sender_id" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "Sender" },
  ];

  const divRef = useRef(null);

  const scrollToTop = () => {
    divRef.current.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 붔가하면 됨. */}
          <div className="main-container">
            <TitleMailbox userName={name} />
            {/* <div className="scrollable"> */}
            <div style={{ height: "700px", overflowY: "scroll" }} ref={divRef}>
              {envelopeData.reduce((rows, envelope, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(
                  <Envelope key={index} letter={envelope} />
                );
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="Envelope-3-container">
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailboxPage;
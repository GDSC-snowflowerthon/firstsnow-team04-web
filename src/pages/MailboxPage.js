import "./MailboxPage.css";

import fog from "../assets/fog.svg";
import TitleMailbox from "../components/TitleMailbox";
import Envelope from "../components/Envelope";
import { useRef } from "react";

import { useParams } from "react-router-dom";

const mailapi = async (token) => {
  await fetch("./api/v1/letter/read-post", {
    headers: {
      Autherization: token,
    },
    method: "GET",
  })
    .then((response) => {
      response.json();
    })
    .then((result) => {
      return result["data"];
    });
};

const MailboxPage = () => {
  const id = useParams().userid;
  const token = localStorage.getItem("tok");

  const divRef = useRef(null);

  // const scrollToTop = () => {
  //   divRef.current.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const envelopeData = [
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "이혁이" },
    { is_open: "open", sender_id: "은소금소혁산구연강건너" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "정구연" },
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "이혁이" },
    { is_open: "open", sender_id: "은소금소혁산구연강건너" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "정구연" },
    { is_open: "close", sender_id: "강산" },
    { is_open: "open", sender_id: "구연" },
    { is_open: "close", sender_id: "이혁이" },
    { is_open: "open", sender_id: "은소금소혁산구연강건너" },
    { is_open: "open", sender_id: "연구" },
    { is_open: "close", sender_id: "강산아" },
    { is_open: "close", sender_id: "혁" },
    { is_open: "close", sender_id: "정구연" },
  ];

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            {/* <TitleMailbox userName={name} /> */}
            <div className="App-title-mailbox">
              {/* <img src={iconDirection} alt="back button Image" className='App-title-mailbox-back'/> */}
              <p className="App-title-mailbox-text-bold">{name}님</p>
              <p className="App-title-mailbox-text">의 우편함</p>
            </div>
            <div style={{ height: "700px", overflowY: "scroll" }} ref={divRef}>
              {envelopeData
                .reduce((rows, envelope, index) => {
                  if (index % 3 === 0) rows.push([]);
                  rows[rows.length - 1].push(
                    <Envelope key={index} letter={envelope} />
                  );
                  return rows;
                }, [])
                .map((row, rowIndex) => (
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

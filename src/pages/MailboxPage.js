import "./MailboxPage.css";

import fog from "../assets/fog.svg";
import TitleMailbox from "../components/TitleMailbox";
import Envelope from "../components/Envelope";
import { Link } from "react-router-dom";

const MailboxPage = () => {
  const id = useParams().userid;
  const name = [
    0,
    "동국대 리드",
    "숭실대 리드",
    "이화여대 리드",
    "홍익대 리드",
  ][id - 4];

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <TitleMailbox userName={name} />
            <div className="Envelope-3-container">
              <Envelope letter={{ is_open: "close", sender_id: "강산" }} />
              <Envelope letter={{ is_open: "open", sender_id: "연구" }} />
              <Envelope letter={{ is_open: "close", sender_id: "혁오" }} />
            </div>
            <div className="Envelope-3-container">
              <Envelope
                letter={{ is_open: "open", sender_id: "이혁삼혁사혁오혁육혁" }}
              />
              <Envelope letter={{ is_open: "open", sender_id: "구연" }} />
              <Envelope letter={{ is_open: "close", sender_id: "강산아" }} />
            </div>
            <div className="Envelope-3-container">
              <Envelope letter={{ is_open: "close", sender_id: "은소" }} />
              <Envelope letter={{ is_open: "close", sender_id: "혁이" }} />
              <Envelope letter={{ is_open: "close", sender_id: "정구연" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailboxPage;

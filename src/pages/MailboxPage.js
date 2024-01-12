import "./MailboxPage.css";

import fog from "../assets/fog.svg";
import TitleMailbox from "../components/TitleMailbox";
import Envelope from "../components/Envelope";

const MailboxPage = () => {
  const name = "이혁"; //user name

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
              <Envelope letter={{ is_open: "close", sender_id: "test" }} />
              <Envelope letter={{ is_open: "open", sender_id: "test" }} />
              <Envelope letter={{ is_open: "close", sender_id: "test" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailboxPage;

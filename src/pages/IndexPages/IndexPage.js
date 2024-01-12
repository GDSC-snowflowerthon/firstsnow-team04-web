import "./IndexPage.css";

import fog from "../../assets/fog.svg";

import snowbg1 from "../../assets/snow-bg-1.svg";
import snowbg2 from "../../assets/snow-bg-2.svg";
import snowbg3 from "../../assets/snow-bg-3.svg";
import SnowFloor from "../../components/SnowFloor2";
import Button from "../../components/Button";
import MailboxNSnowman2 from "../../components/MailboxNSnowman2";

import { Link } from "react-router-dom";

const IndexPage = () => {
  const mailopen = true;
  const snowmantype = 1;

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />
          {/* 하늘 눈(움직임) */}
          <div className="snow-bg-container">
            <img
              src={snowbg1}
              alt="Snow Background 1"
              className="App-bg-snow"
            />
          </div>

          {/* 바닥 눈*/}
          <SnowFloor />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <MailboxNSnowman2 mailboxOpen={mailopen} snowmantype={snowmantype}/>
            <Link to="/writeMail/8" className="Index-1">
              <Button color="dark" text="홍익대"></Button>
            </Link>
            <Link to="/writeMail/7" className="Index-2">
              <Button color="dark" text="이화여대"></Button>
            </Link>
            <Link to="/writeMail/6" className="Index-3">
              <Button color="dark" text="숭실대"></Button>
            </Link>
            <Link to="/writeMail/5" className="Index-4">
              <Button color="dark" text="동국대"></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

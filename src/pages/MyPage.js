import MainHeader from "../components/MainHeader";
import TitleMainMy from "../components/TitleMainMy";
import Button from "../components/Button";
import "./MyPage.css";
import "../App.css";

import fog from "../assets/fog.svg";
import snowbg1 from "../assets/snow-bg-1.svg";
import snowbg2 from "../assets/snow-bg-2.svg";
import snowbg3 from "../assets/snow-bg-3.svg";
import SnowFloor from "../components/SnowFloor";
import MailboxNSnowman from "../components/MailboxNSnowman";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const userapi = async (name) => {
  const [user, setUser] = useState({
    name: "",
  });
  const request = { nickname: name };
  await fetch("./api/v1/user/login", {
    method: "POST",
    body: JSON.stringify(request),
  })
    .then((response) => {
      response.json();
    })
    .then((result) => {});
};

const MyPage = () => {
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
            <MainHeader />
            <TitleMainMy userName={name} mailboxOpen={true}></TitleMainMy>
            <Link to={`/mailboxList/${id}`}></Link>
            <MailboxNSnowman mailboxOpen={true} snowmantype={id} />
            <Link to={`/writeMail/${id}`}>
              <Button
                className="MyPage-Button"
                color="dark"
                text="편지 작성하기"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

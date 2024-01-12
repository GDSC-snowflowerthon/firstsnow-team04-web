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
import { useParams, Link, useNavigate } from "react-router-dom";

const MyPage = () => {
  const id = useParams().userid;
  const navigate = useNavigate();

  const name = ["서희찬", "고광서", "김현아", "김유진"][id - 5];
  const token = [
    "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6NSwiaWF0IjoxNzA1MTAwNzY5LCJleHAiOjE3MDUxMTA3Njl9.4yEndEqrHIFBqKtDx_4Zqhqfe6cDpHp5ZQHm2kKA1CHf4S2CogE7KlVyxmsuuQgrbc3hfGRZssWOdrcgcRFMxw",
    "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6NiwiaWF0IjoxNzA1MTAwODA2LCJleHAiOjE3MDUxMTA4MDZ9.otHFYWm8BXzajFi7_HvABW6ZHwsg212WfAaxVE_Q4FN5VcI3SAEE8LkYTFbid9MQgosuVRHKzBfOtnPkxR2rqg",
    "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6NywiaWF0IjoxNzA1MTAwODI0LCJleHAiOjE3MDUxMTA4MjR9.E8KiiU07Genkq_II3bR4v9QzgQsQoB0jlTDOR4osb0T9HifsQKXslnxUhRBrz-5xMjMFpMVRw6vAN7VORDhsIA",
    "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6OCwiaWF0IjoxNzA1MTAwODMyLCJleHAiOjE3MDUxMTA4MzJ9.a7F0a2QOtBBJwt8_DRTKR9gVoAIqwO8w2Ma0FK3oQe54sHMlZKaNMBGT5TveWFdIcm99s3MROAkibLYKamVGFA",
  ][id - 5];

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
            <Link to={`/mailboxpage/${id}`}>
              <MailboxNSnowman mailboxOpen={true} snowmantype={id} />
            </Link>

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

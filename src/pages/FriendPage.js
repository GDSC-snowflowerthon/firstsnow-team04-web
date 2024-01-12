import MainHeader from "../components/MainHeader";
import TitleMainMy from "../components/TitleMainMy";
import Button from "../components/Button";
import "./FriendPage.css";

import fog from "../assets/fog.svg";
import snowbg1 from "../assets/snow-bg-1.svg";
import snowbg2 from "../assets/snow-bg-2.svg";
import snowbg3 from "../assets/snow-bg-3.svg";
import SnowFloor from "../components/SnowFloor";
import MailboxNSnowman from "../components/MailboxNSnowman";
import TitleMainFriend from "../components/TitleMainFriend";

const FriendPage = () => {
  const isLogin = true;
  const name = isLogin?("이혁"):("익명"); //username
  const mailopen = true;
  const snowmantype = 2;
  const friendName = "산아"; //친구 user name

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
            <TitleMainFriend userName={friendName}></TitleMainFriend>
            <MailboxNSnowman mailboxOpen={mailopen} snowmantype={snowmantype}/>
            <Button 
              className="FriendPage-Button" 
              color="dark" 
              text="마음 전달하러 가기"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;

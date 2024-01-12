import "./WriteMailPage.css";

import TitleMailboxWrite from "../components/TitleMailboxWrite";
import LetterWrite from '../components/LetterWrite';

import fog from "../assets/fog.svg";

const WriteMailPage = () => {
  const name= "이혁"; //username
  const date= "2024.01.13"; //당일 날짜
  const friendName = "산아"; //친구 user name

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <TitleMailboxWrite userName={friendName}/>
            <LetterWrite date={date} textTo={friendName} textFrom={name}/>
            {/* <Button onClick={()=>{
              console.log({text});
            }} className="writeMailPage-Button" color="white" text="완료"></Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteMailPage;

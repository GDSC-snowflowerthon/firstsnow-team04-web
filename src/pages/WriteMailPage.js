import "./WriteMailPage.css";

import TitleMailboxWrite from "../components/TitleMailboxWrite";
import LetterWrite from "../components/LetterWrite";

import fog from "../assets/fog.svg";
import { useParams } from "react-router-dom";

const WriteMailPage = () => {
  const id = useParams().userid;
  const friendName = [
    0,
    "동국대 리드",
    "숭실대 리드",
    "이화여대 리드",
    "홍익대 리드",
  ][id - 4];
  //username
  const date = "2024.01.13"; //당일 날짜
  const name = "눈꽃톤 일동"; //친구 user name

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <TitleMailboxWrite userName={friendName} />
            <LetterWrite
              date={date}
              textTo={friendName}
              textFrom={name}
              id={id}
            />
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

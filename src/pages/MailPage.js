import "./MailPage.css";

import TitleMailbox from "../components/TitleMailbox";
import LetterView from '../components/LetterView';
import PageNumber from '../components/PageNumber';

import fog from "../assets/fog.svg";

const MailPage = () => {
  const name= "이혁"; //user name
  const date= "2024.01.13"; //당일 날짜
  const friendName = "산아"; //친구 user name
  const text="눈이내려 산아 눈이와 \n 새해 복 많이 받고 행복하렴 ! 우리는 다 할 수 있을까? 응 할수있을거야 ^^ 다들 화이팅 응원해 구연아 생일 축하해 혁아 노래 발표한거 축하해 대머리가 잘어울리는구나 오혁처럼 노래를 잘 부르는 에 ! 일 ! 리 ! 혁 ! 노래해 짝 노래해 짝 "
  const nowPage="01"; // 현재 편지 번수
  const totalPage="21"; //내가 받은 편지 총 개수

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <TitleMailbox userName={name} />
            {/* <LetterWrite date={date} textTo={friendName} textFrom={name}/> */}
            <LetterView date={date} textTo={friendName} textDetail={text} textFrom={name} />
            <PageNumber nowPage={nowPage} totalPage={totalPage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailPage;

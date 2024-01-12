import './App.css';
import './components/Header.css';

import fog from './assets/fog.svg';
import snowbg1 from './assets/snow-bg-1.svg';
import snowbg2 from './assets/snow-bg-2.svg';
import snowbg3 from './assets/snow-bg-3.svg';
import SnowFloor from './components/SnowFloor';

import BackHeader from './components/BackHeader';
import MainHeader from './components/MainHeader';
import TitleMailbox from './components/TitleMailbox';
import TitleMain from './components/TitleMain';
import SignupQuestion from './components/SignupQuestion';
import SettingHeader from './components/SettingHeader';
import PageNumber from './components/PageNumber';
import LetterView from './components/LetterView';
import LetterWrite from './components/LetterWrite';
import MailboxNSnowman from './components/MailboxNSnowman';


function App() {
  const main = "이 편지는 영국에서 처음 시작되어 어쩌구 저쩌구 얄리얄리 얄라쑝\n 우리팀 파이팅! 나는 원래 당첨같은거 잘 안걸리는데 오늘 1번으로 럭키드로우 당첨됐으니 아주 운이 좋다 말할수 있습니다.";

  return (
    <div className='App-bg-non'>
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className='App-bg'>
        <div className='overlap-container'>
          <img src={fog} alt="Fog Image" className='App-bg-fog' />
          
          {/* 하늘 눈(움직임) */}
          <div className='snow-bg-container'>
            <img src={snowbg1} alt="Snow Background 1" className='App-bg-snow' />
          </div>

          {/* 바닥 눈*/}
          <SnowFloor/>

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className='main-container'>
            <MainHeader/>
            {/* <BackHeader /> */}
            {/* <TitleMailbox userName="user"/> */}
            <TitleMain userName="user"/>
            {/* <SignupQuestion userName="아이디" /> */}
            {/* <SettingHeader userName="user" /> */}
            {/* <LetterView date="2024.01.01" textTo="산아" textDetail={main} textFrom="혁" /> */}
            {/* <LetterWrite date="2024.01.01" textTo="산아" textFrom="혁" /> */}
            {/* <PageNumber nowPage="01" totalPage="10"/> */}
            <MailboxNSnowman mailboxOpen={false}/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

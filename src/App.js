import './App.css';
import './components/Header.css';

import fog from './assets/fog.svg';
import snowbg1 from './assets/snow-bg-1.svg';
import snowbg2 from './assets/snow-bg-2.svg';
import snowbg3 from './assets/snow-bg-3.svg';
import SnowFloor from './components/SnowFloor';


function App() {
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

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

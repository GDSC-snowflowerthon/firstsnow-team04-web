import MainHeader from "../components/MainHeader";
import TitleMain from "../components/TitleMain";
import Button from "../components/Button";
import "./MyPage.css";

import fog from "../assets/fog.svg";
import snowbg1 from "../assets/snow-bg-1.svg";
import snowbg2 from "../assets/snow-bg-2.svg";
import snowbg3 from "../assets/snow-bg-3.svg";
import SnowFloor from "../components/SnowFloor";

const MyPage = () => {
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
            <MainHeader></MainHeader>
            <TitleMain name="이혁"></TitleMain>
            {/* 우편함 눈사람 들어올 위치 */}
            <Button color="dark" text="링크 공유"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

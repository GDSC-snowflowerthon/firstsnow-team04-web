import "./SettingPage.css";

import fog from "../../assets/fog.svg";
import SettingHeader from "../../components/SettingHeader";
import SearchNickName from "../../components/SearchNickname";
import Setting from "../../components/Setting";
import SettingToggle from "../../components/SettingToggle";

const SettingPage = () => {
  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <SettingHeader userName="이혁"></SettingHeader>
            <SearchNickName></SearchNickName>
            <Setting setting="name"></Setting>
            <Setting setting="location"></Setting>
            <SettingToggle init={1}></SettingToggle>
            <Setting setting="snowman"></Setting>
            <Setting setting="logout"></Setting>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

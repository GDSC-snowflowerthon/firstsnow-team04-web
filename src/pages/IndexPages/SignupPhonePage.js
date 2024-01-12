import "./SignupPhonePage.css";

import fog from "../../assets/fog.svg";

const SignupPhonePage = () => {
  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container"></div>
        </div>
      </div>
    </div>
  );
};

export default SignupPhonePage;

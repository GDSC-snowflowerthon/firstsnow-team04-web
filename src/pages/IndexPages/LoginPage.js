import "./LoginPage.css";

import fog from "../../assets/fog.svg";
import SignupQuestion from "../../components/SignupQuestion";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");

  const handleLogin = (e) => {
    console.log(e.target);
    setLoginInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    const request = { nickname: e.target.value };
    console.log(request);
    await fetch("/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result["success"] == true) {
          const DATA = result["data"];
          localStorage.setItem("data", JSON.stringify(DATA));
          const navigate = useNavigate();
          navigate(`/main/${DATA["user_id"]}`);
        } else {
          console.log(result["error"]["code"]);
          console.log(result["error"]["message"]);
        }
      });
  };

  return (
    <div className="App-bg-non">
      {/* 배경색상 + 안개 + 하늘 눈 + 바닥 눈 ++ 페이지 내용*/}
      <div className="App-bg">
        <div className="overlap-container">
          <img src={fog} alt="Fog Image" className="App-bg-fog" />

          {/* 이 아래에 페이지 내용들 추가하면 됨. */}
          <div className="main-container">
            <SignupQuestion name="닉네임"></SignupQuestion>
            <Input value={loginInput} text="닉네임" func={handleLogin}></Input>
            <Button
              value={loginInput}
              color="white"
              text="완료"
              onclick={handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import locationIcon from "../assets/change-location.svg";
import nameIcon from "../assets/change-name.svg";
import snowmanIcon from "../assets/change-snowman.svg";
import loginIcon from "../assets/setting-login.svg";
import logoutIcon from "../assets/setting-logout.svg";

import { useNavigate } from "react-router-dom";

import "./Setting.css";

const Setting = ({ setting }) => {
  const navigate = useNavigate();

  const changeName = () => {
    navigate("/setting/name");
  };
  const changeLocation = () => {
    navigate("/setting/location");
  };
  const changeSnowman = () => {
    navigate("/setting/snowman");
  };
  const login = () => {};

  const logout = () => {};

  const SETTING = {
    name: [nameIcon, "닉네임 변경하기", changeName],
    location: [locationIcon, "내 위치 정보 변경하기", changeLocation],
    login: [loginIcon, "로그인", login],
    logout: [logoutIcon, "로그아웃", logout],
    snowman: [snowmanIcon, "내 눈사람 변경하기", changeSnowman],
  };

  const list = SETTING[setting];
  return (
    <div className="Setting-Container" onClick={list[2]}>
      <img src={list[0]} className="Setting-Icon"></img>
      <div className="Setting-Text">{list[1]}</div>
    </div>
  );
};

export default Setting;

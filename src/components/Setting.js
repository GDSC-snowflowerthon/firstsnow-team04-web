import emailIcon from "../assets/change-email.svg";
import locationIcon from "../assets/change-location.svg";
import nameIcon from "../assets/change-name.svg";
import snowmanIcon from "../assets/change-snowman.svg";
import loginIcon from "../assets/setting-login.svg";
import logoutIcon from "../assets/setting-logout.svg";
import mailboxIcon from "../assets/setting-mailbox.svg";

import "./Setting.css";

const SETTING = {
  email: [emailIcon, "이메일 변경하기"],
  name: [nameIcon, "닉네임 변경하기"],
  location: [locationIcon, "내 위치 정보 변경하기"],
  mailbox: [mailboxIcon, "내 우편함으로 돌아가기"],
  login: [loginIcon, "로그인"],
  logout: [logoutIcon, "로그아웃"],
  snowman: [snowmanIcon, "내 눈사람 변경하기"],
};

const Setting = ({ setting }) => {
  return (
    <div className="Setting-Container">
      <img src={SETTING[setting][0]} className="Setting-Icon"></img>
      <div className="Setting-Text">{SETTING[setting][1]}</div>
    </div>
  );
};

export default Setting;

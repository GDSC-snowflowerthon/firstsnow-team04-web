import Switch from "@mui/material/Switch";
import userIcon from "../assets/change-user.svg";
import "./Setting.css";

const SETTING = {
  on: "회원에게만 받기",
  off: "누구에게나 받기",
};

const SettingToggle = ({ who }) => {
  return (
    <div className="Setting-Container">
      <img src={userIcon} className="Setting-Icon"></img>
      <div className="Setting-Wrapper">
        <div className="Setting-Text">{SETTING[who]}</div>
        <Switch></Switch>
      </div>
    </div>
  );
};

export default SettingToggle;

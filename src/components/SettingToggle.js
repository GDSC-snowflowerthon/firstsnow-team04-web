// import Switch from "@mui/material/Switch";
import userIcon from "../assets/change-user.svg";
import "./Setting.css";
import { useState } from "react";

const SETTING = ["누구에게나 받기", "회원에게만 받기"];

const SettingToggle = ({ init }) => {
  const [toggle, setToggle] = useState(init);
  /* 0: off, 1: on */
  return (
    <div className="Setting-Container">
      <img src={userIcon} className="Setting-Icon"></img>
      <div className="Setting-Wrapper">
        <div className="Setting-Text">{SETTING[toggle]}</div>
        {/* <Switch
          checked={toggle}
          onChange={(e) => {
            setToggle(Number(!toggle));
          }}
        ></Switch> */}
      </div>
    </div>
  );
};

export default SettingToggle;

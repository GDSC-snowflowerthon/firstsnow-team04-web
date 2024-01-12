import "./App.css";
import "./components/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyPage from "./pages/MyPage";
import FriendPage from "./pages/FriendPage";
import WriteMailPage from "./pages/WriteMailPage";
import MailboxPage from "./pages/MailboxPage";
import SettingPage from "./pages/SettingPages/SettingPage";
import SearchPage from "./pages/SettingPages/SearchPage";
import ChangeSnowmanPage from "./pages/SettingPages/ChangeSnowmanPage";
import ChangeNamePage from "./pages/SettingPages/ChangeNamePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage></MyPage>}></Route>
        <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
        <Route path="/friend" element={<FriendPage></FriendPage>}></Route>
        <Route path="/writeMail" element={<WriteMailPage></WriteMailPage>}></Route>
        <Route path="/mailboxList" element={<MailboxPage></MailboxPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

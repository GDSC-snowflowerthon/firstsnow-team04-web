import "./App.css";
import "./components/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyPage from "./pages/MyPage";
import FriendPage from "./pages/FriendPage";
import WriteMailPage from "./pages/WriteMailPage";
import MailboxPage from "./pages/MailboxPage";
import MailPage from "./pages/MailPage";
import SettingPage from "./pages/SettingPages/SettingPage";
import SearchPage from "./pages/SettingPages/SearchPage";
import ChangeSnowmanPage from "./pages/SettingPages/ChangeSnowmanPage";
import ChangeLoactionPage from "./pages/SettingPages/ChangeLocationPage";
import ChangeNamePage from "./pages/SettingPages/ChangeNamePage";
import IndexPage from "./pages/IndexPages/IndexPage";
import LoginPage from "./pages/IndexPages/LoginPage";
import SignupLocationPage from "./pages/IndexPages/SignupLocationPage";
import SignupNamePage from "./pages/IndexPages/SignupNamePage";
import SignupPhonePage from "./pages/IndexPages/SignupPhonePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage></IndexPage>}></Route>
        <Route path="/main"></Route>
        <Route path="/main/:userid" element={<MyPage></MyPage>}></Route>
        <Route path="/friend" element={<FriendPage></FriendPage>}></Route>
        <Route path="/writeMail"></Route>
        <Route path="/MailPage" element={<MailPage></MailPage>}></Route>
        <Route
          path="/writeMail/:userid"
          element={<WriteMailPage></WriteMailPage>}
        ></Route>
        <Route path="/mailboxList"></Route>
        <Route
          path="/mailboxList/:userid"
          element={<MailboxPage></MailboxPage>}
        ></Route>
        <Route path="/" element={<IndexPage></IndexPage>}></Route>
        <Route path="/main" element={<MyPage></MyPage>}></Route>
        <Route
          path="/signup/name"
          element={<SignupNamePage></SignupNamePage>}
        ></Route>
        <Route
          path="/signup/phone"
          element={<SignupPhonePage></SignupPhonePage>}
        ></Route>
        <Route
          path="/signup/location"
          element={<SignupLocationPage></SignupLocationPage>}
        ></Route>

        <Route path="/setting">
          <Route index element={<SettingPage></SettingPage>}></Route>
          <Route
            path="name"
            element={<ChangeNamePage></ChangeNamePage>}
          ></Route>
          <Route
            path="location"
            element={<ChangeLoactionPage></ChangeLoactionPage>}
          ></Route>
          <Route
            path="snowman"
            element={<ChangeSnowmanPage></ChangeSnowmanPage>}
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

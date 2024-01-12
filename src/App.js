import "./App.css";
import "./components/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyPage from "./pages/MyPage";
import SettingPage from "./pages/SettingPages/SettingPage";
import SearchPage from "./pages/SettingPages/SearchPage";
import ChangeSnowmanPage from "./pages/SettingPages/ChangeSnowmanPage";
import ChangeLoactionPage from "./pages/SettingPages/ChangeLocationPage";
import ChangeNamePage from "./pages/SettingPages/ChangeNamePage";
import IndexPage from "./pages/IndexPages/IndexPage";
import LoginPage from "./pages/IndexPages/LoginPage";

function App() {
  const main = "이 편지는 영국에서 처음 시작되어 어쩌구 저쩌구 얄리얄리 얄라쑝\n 우리팀 파이팅! 나는 원래 당첨같은거 잘 안걸리는데 오늘 1번으로 럭키드로우 당첨됐으니 아주 운이 좋다 말할수 있습니다.";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage></IndexPage>}></Route>
        <Route path="/main" element={<MyPage></MyPage>}></Route>
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

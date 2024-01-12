import "./App.css";
import "./components/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyPage from "./pages/MyPage";
import SettingPage from "./pages/SettingPages/SearchPage";
import SearchPage from "./pages/SettingPages/SearchPage";
import ChangeSnowmanPage from "./pages/SettingPages/ChangeSnowmanPage";
import ChangeNamePage from "./pages/SettingPages/ChangeNamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage></MyPage>}></Route>
        <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

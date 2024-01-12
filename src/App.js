import "./App.css";
import "./components/Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SettingPage from "./pages/SettingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SettingPage></SettingPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

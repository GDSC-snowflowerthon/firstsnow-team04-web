import "./App.css";
import "./components/Header.css";
// import MainHeader from './components/MainHeader';

import fog from "./assets/fog.png";
import Button from "./components/Button";

function App() {
  return (
    <div className="App-bg-non">
      <div className="App-bg">
        {/* <MainHeader/> */}
        <img src={fog} alt="Fog Image" className="App-bg-fog" />
      </div>
      {/* Test */}
      <Button color="dark" text="글씨"></Button>
    </div>
  );
}

export default App;

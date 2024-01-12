import './App.css';
import './components/Header.css';
// import MainHeader from './components/MainHeader';

import fog from './assets/fog.png';

function App() {
  return (
    <div className='App-bg-non'>
      <div className='App-bg'>
        {/* <MainHeader/> */}
        <img src={fog} alt="Fog Image" className='App-bg-fog' />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import CurrentTime from './components/CurrentTime/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Семинар 1
        </a>
        <Greeting></Greeting>
        <CurrentTime></CurrentTime>
        <EventCard name="Кино" place="Москва" date="26 января"></EventCard>
        <EventCard name="Ресторан" place="Санкт-Петербург" date="17 ноября"></EventCard>
        <EventCard name="Поход" place="Московская область" date="20 июня"></EventCard>
      </header>
    </div>
  );
}

export default App;

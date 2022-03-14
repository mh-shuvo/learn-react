import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ["Md Mehedi Hasan", "Anik", "Pranta Kumer", "Durjoy", "Sadaat"];
    const index = Math.floor(Math.random() * names.length);
    return names[index];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://mehedi.bitbyteplay.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {handleNameChange()}
        </a>
      </header>
    </div>
  );
}

export default App;

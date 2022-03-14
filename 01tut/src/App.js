import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Md Mehedi Hasan', 'Mehedi Hasan Anik', 'Pranta Kumer Bhuyian'];
    const randomIndex = Math.floor(Math.random() * 3);
    return names[randomIndex];
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          {handleNameChange()} <br />
          Software Engineer at
          <b> ASL SYSTEMS</b>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;

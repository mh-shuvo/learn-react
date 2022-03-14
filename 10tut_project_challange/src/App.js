import logo from './logo.svg';
import './App.css';
import MainBlock from './MainBlock';
import AddColorInput from './AddColorInput';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");
  const [label, setLabel] = useState("Empty Value");

  const handleColor = (newColor) => {
    if (newColor != '') {
      setColor(newColor);
      setLabel(newColor);
    } else {
      setColor("white");
      setLabel("Empty Value")
    }
  }
  return (
    <div className="App">
      <MainBlock color={color} label={label} />
      <AddColorInput color={color} handleColor={handleColor} />
    </div>
  );
}

export default App;

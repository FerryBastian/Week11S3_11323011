import React from 'react';
import Button from './button'; // Assuming Button is in a file named Button.js
import LightSwitch from './lightSwitch'; // Assuming LightSwitch is in a file named LightSwitch.js
import './style.css'

function App() {
  return (
    <div>
      <Button />
      <LightSwitch />
    </div>
  );
}

export default App;

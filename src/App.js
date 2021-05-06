import React from 'react';
import './App.css';
import PuttingItTogether from './components/PuttingItTogether';

function App() {
  return (
    <div className="App">
      <PuttingItTogether firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PuttingItTogether firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PuttingItTogether firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PuttingItTogether firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;

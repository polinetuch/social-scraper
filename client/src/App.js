import React from 'react';
import './App.css';
import Find from './component/Find';

function App() {
  return (
    <div className="App">
      <header>
        Find out how popular you are!
      </header>
      <div>
        <Find>
          <label>
            Enter any word here: 
            <input type="text"></input>
          </label>
        </Find>
      </div>
    </div>
  );
}

export default App;

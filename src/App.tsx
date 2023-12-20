import React from 'react';
import './App.css';
import Header from './components/Header';
import CurrencyConversion from './components/CurrencyConversion'
import CurrencyFilter from './components/CurrencyFilter'
import CurrencyTable from './components/CurrencyTable';
import Login from './components/Login'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

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

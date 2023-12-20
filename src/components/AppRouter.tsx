import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import CurrencyConversion from './CurrencyConversion'
import CurrencyFilter from './CurrencyFilter'
import CurrencyTable from './CurrencyTable';
import Login from './Login'
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<CurrencyTable currencies={['USD', 'EUR', 'GBP']}/>} />
        <Route path="/filter" element={<CurrencyFilter />} />
        <Route path="/conversion" element={<CurrencyConversion />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

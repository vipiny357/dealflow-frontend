import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://cdn.dorik.com/6004891a44afdb0011b84555/610faa2684b952001f122dee/images/Dealflow-name_m27ohleh.png" alt="Logo" />
      </div>
      <div className="buttons">
        <button className="btn">Get Paid</button>
        <button className="btn">Pay Now</button>
      </div>
    </header>
  );
};

export default Header;

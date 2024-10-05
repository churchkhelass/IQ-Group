import React from 'react';
import './Header.css';

const Header = ({ currentPage, goBack }) => {
  console.log(currentPage)
  return (
    <header className="header">
      <div className="right-section">
        {currentPage.includes('>') && (
          <button className="back-button" onClick={goBack}>←</button>
        )}
        <span className="current-page">{currentPage}</span>
      </div>
    </header>
  );
};

export default Header;
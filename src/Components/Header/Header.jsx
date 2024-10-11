import React from 'react';
import './Header.css';
import angleDown from '../../assets/icon/angle-down.svg';
import leftArrow from '../../assets/icon/left-arrow.svg';

const Header = ({ currentPage, goBack }) => {
  const hasSubMenu = currentPage.includes('>'); // Проверяем, есть ли подменю
  const [mainPage, subPage] = hasSubMenu ? currentPage.split('>') : [currentPage]; // Разделяем на части

  return (
    <header className="header">
      <div className="right-section">
        {hasSubMenu && (
          <button className="back-button" onClick={goBack}>
            <img 
              src={leftArrow}
              
              alt="icon"
            />
          </button>
        )}
        <span className="current-page">
          <span className="main-page" style={{ color: hasSubMenu ? 'gray' : 'inherit' }}>
            {mainPage.trim()}
          </span>
          {hasSubMenu && (
            <>
              <img src={angleDown} style={{ transform: 'rotate(270deg)', paddingRight: 10, paddingLeft: 10, opacity: 0.5 }} alt="icon" />
              <span className="sub-page">{subPage.trim()}</span>
            </>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
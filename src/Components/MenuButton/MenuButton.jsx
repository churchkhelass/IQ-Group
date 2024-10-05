import React, { useState, useRef, useEffect } from 'react';
import './MenuButton.css';
import angleDown from '../../assets/icon/angle-down.svg'

const MenuButton = ({ icon, title, hasNotification, onClick, isMenuOpen, subMenuItems, onSubMenuClick }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0); // состояние для высоты подменю
  const subMenuRef = useRef(null); // ссылка на подменю для получения высоты

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    if (subMenuRef.current) {
      setSubMenuHeight(showSubMenu ? subMenuRef.current.scrollHeight : 0);
    }
  }, [showSubMenu]);

  return (
    <div className="menu-button" onClick={onClick}>
      <button className="button-content">
        <div className="left-content">
          <span className="icon">{icon}</span>
          {isMenuOpen && <span className="title">{title}</span>}
        </div>
        <div className="right-content">
          {isMenuOpen && hasNotification && <div className="notification-dot"><span >1</span></div>}
          {isMenuOpen && subMenuItems && (
            <span className="arrow" onClick={toggleSubMenu}>
              {showSubMenu ? <img src={angleDown} style={{transform: 'rotate(180deg)'}} alt={'icon'} /> : <img src={angleDown} alt={'icon'} />}
            </span>
          )}
        </div>
      </button>
      <div
        className="sub-menu"
        ref={subMenuRef}
        style={{ height: `${subMenuHeight}px`, overflow: 'hidden', transition: 'height 0.3s ease' }}
      >
        {subMenuItems && subMenuItems.map((item, index) => (
          <div
            key={index}
            className="sub-menu-item"
            onClick={() => onSubMenuClick(title, item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuButton;
import React, { useState, useRef, useEffect } from 'react';
import './MenuButton.css';
import angleDown from '../../assets/icon/angle-down.svg'

const MenuButton = ({ icon, title, hasNotification, onClick, isMenuOpen, subMenuItems, onSubMenuClick, isActive }) => {
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
    <div className={`menu-button ${isActive ? 'active' : ''}`}>
    <button className={`button-content ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="left-content">
        <span className="icon">{icon}</span>
        {isMenuOpen && <span className="title">{title}</span>}
      </div>
      <div className="right-content">
        {isMenuOpen && hasNotification && <div className="notification-dot"><span style={{ fontWeight: 'bold' }}>1</span></div>}
        {isMenuOpen && subMenuItems && (
          <span className="arrow" onClick={(e) => { e.stopPropagation(); toggleSubMenu(); }}>
            {showSubMenu ? <img src={angleDown} style={{ transform: 'rotate(180deg)' }} alt={'icon'} /> : <img src={angleDown} alt={'icon'} />}
          </span>
        )}
      </div>
    </button>
    {isMenuOpen && (
      <div
        className="sub-menu"
        ref={subMenuRef}
        style={{ height: `${subMenuHeight}px`, overflow: 'hidden', transition: 'height 0.3s ease' }}
      >
        {subMenuItems && subMenuItems.map((item, index) => (
          <div
            key={index}
            className="sub-menu-item"
            onClick={(e) => { e.stopPropagation(); onSubMenuClick(title, item); }}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default MenuButton;
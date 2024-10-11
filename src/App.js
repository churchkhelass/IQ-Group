import React, { useState } from 'react';
import './App.css';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import Header from './Components/Header/Header';
import ContentRenderer from './Components/SidebarMenu/ContentRenderer';

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Рабочий стол');
  const [isMenuOpen, setIsMenuOpen] = useState(true); // состояние для открытия/закрытия меню

  const handleSubMenuClick = (mainItem, subItem) => {
    setActiveMenuItem(`${mainItem} > ${subItem}`);
  };
  
  const goBack = () => {
    if (activeMenuItem.includes('>')) {
      const mainItem = activeMenuItem.split('>')[0].trim();
      setActiveMenuItem(mainItem);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // переключение состояния меню
  };

  return (
    <div className="container">
      <div className="main-content">
        <SidebarMenu 
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
          handleSubMenuClick={handleSubMenuClick}
        />
        <div className="content">
          <Header currentPage={activeMenuItem} goBack={goBack} />
          <div>
            <ContentRenderer activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
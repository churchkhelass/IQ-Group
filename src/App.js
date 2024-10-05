import React, { useState } from 'react';
import './App.css';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import Header from './Components/Header/Header';
import ContentRenderer from './Components/SidebarMenu/ContentRenderer';

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Рабочий стол');
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // состояние для открытия/закрытия меню
  
  const handleSubMenuClick = (mainItem, subItem) => {
    console.log(subItem)
    setActiveMenuItem(`${mainItem} > ${subItem}`);
    setSubMenuActive(true);
  };

  const goBack = () => {
    if (activeMenuItem.includes('->')) {
      const mainItem = activeMenuItem.split('->')[0].trim();
      setActiveMenuItem(mainItem);
      setSubMenuActive(false);
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
          setActiveMenuItem={setActiveMenuItem}
          handleSubMenuClick={handleSubMenuClick}
        />
        <div className="content">
          <Header currentPage={activeMenuItem} goBack={goBack} />
          <div style={{padding: '20px'}}>
            <ContentRenderer activeMenuItem={activeMenuItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
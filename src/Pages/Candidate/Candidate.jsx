import React, { useState, useEffect } from 'react';
import './Candidate.css'
import CandidateInfo from './CandidateInfo.jsx'

const Candidate = ({ activeMenuItem, setActiveMenuItem }) => {
   const [menuWidth, setMenuWidth] = useState(window.innerWidth - 276);
   const subMenuItems = [
      'Основная информация',
      'Задачи',
      'Собеседования',
      'Чат',
      'Комментарии',
      'История изменений'
   ];
   const [activeSubMenuItem, setActiveSubMenuItem] = useState('');
   const [page, setPage] = useState();
   const handleSubMenuClick = (item) => {
      setActiveSubMenuItem(item);
      setActiveMenuItem(`Кандидаты > ${item}`);
   };

   const renderContent = (page) => {
      // console.log(activeMenuItem)
      switch (page) {
         case 'Основная информация':
            return (<CandidateInfo NamePage={page} />);
         default:
            return <div>Пусто</div>;
      }
   };

   useEffect(() => {
      setPage(activeSubMenuItem);
   }, [activeSubMenuItem]);

   //изменение меню 
   useEffect(() => {
      const subMenuPart = activeMenuItem.split('>')[1]?.trim();

      if (subMenuItems.includes(subMenuPart)) {
         setActiveSubMenuItem(subMenuPart);
      } else {
         setActiveSubMenuItem(subMenuItems[0]);
      }
   }, [activeMenuItem]);

   useEffect(() => {
      const handleResize = () => {
        setMenuWidth(window.innerWidth - 276);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


   return (
      <div>
         <div className="top-menu-candidate" style={{ borderBottom: '1px solid lightgrey' }}>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: `${menuWidth}px` }}>
               <ul className="menu-items" style={{ display: 'inline-flex', padding: 0, margin: 0 }}>
                  {subMenuItems.map((item, index) => (
                     <li
                        key={index}
                        className={`menu-item ${activeSubMenuItem === item ? 'active' : ''}`}
                        onClick={() => handleSubMenuClick(item)}
                        style={{ 
                           listStyleType: 'none',
                           marginRight: 20,
                           padding: '10px 20px',
                           whiteSpace: 'nowrap',
                           display: 'flex',
                           flexDirection: 'row'
                        }}
                     >
                        <p style={{margin: 0}}>{item}</p>
                        {item === 'Задачи' && <span className="notification-badge">1</span>}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="content">
            {renderContent(page)}
         </div>
      </div>
   );
};

export default Candidate;
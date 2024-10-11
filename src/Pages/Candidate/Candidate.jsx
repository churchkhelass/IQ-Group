import React, { useState, useEffect  } from 'react';
import './Candidate.css'
import CandidateInfo from './CandidateInfo.jsx'

const Candidate = ({activeMenuItem, setActiveMenuItem}) => {
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
            return <CandidateInfo NamePage={page}/>;
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


   return (
      <div>
      <div className="top-menu-candidate" style={{padding: 20, borderBottom: '1px solid lightgrey'}}>
         <ul className="menu-items">
            {subMenuItems.map((item, index) => (
               <li
                  key={index}
                  className={`menu-item ${activeSubMenuItem === item ? 'active' : ''}`}
                  onClick={() => handleSubMenuClick(item)}
               >
                  {item}
                  {item === 'Задачи' && <span className="notification-badge">1</span>}
               </li>
            ))}
         </ul>
      </div>

         <div className="content">
            {renderContent(page)}
         </div>
      </div>
   );
};

export default Candidate;
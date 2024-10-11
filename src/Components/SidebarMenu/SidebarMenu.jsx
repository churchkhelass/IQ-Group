import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './SidebarMenu.css';
import calendar from '../../assets/icon/calendar.svg';
import candidate from '../../assets/icon/candidate.svg';
import chat from '../../assets/icon/chat.svg';
import dashboard from '../../assets/icon/dashboard.svg';
import jobe from '../../assets/icon/jobe.svg';
import mail from '../../assets/icon/mail.svg';
import memberSearch from '../../assets/icon/member-search.svg';
import settings from '../../assets/icon/settings.svg';
import star from '../../assets/icon/star.svg';
import study from '../../assets/icon/study.svg';
import iconButton from '../../assets/icon/icon-button.svg';
import logo from '../../assets/icon/logo.svg';

const SidebarMenu = ({ isMenuOpen, setActiveMenuItem, handleSubMenuClick, toggleMenu, activeMenuItem }) => {
  return (
    <nav className={`sidebar ${isMenuOpen ? 'open' : 'closed'}`} >
      <div className='sidebar-head'>
        <div className="left-section">
          {isMenuOpen && <span className="logo"><img src={logo} alt={'icon'} /></span>}
          <button className="hamburger-menu" onClick={toggleMenu}><img src={iconButton} alt={'icon'} /></button>
        </div>
      </div>
      <div className='sidebar-body'>
        <MenuButton
          icon={<img src={dashboard} alt={'icon'} />}
          title="Рабочий стол"
          hasNotification={false}
          onClick={() => setActiveMenuItem('Рабочий стол')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Рабочий стол'}
        />
        <MenuButton
          icon={<img src={mail} alt={'icon'} />}
          title="Заявки"
          hasNotification={true}
          onClick={() => setActiveMenuItem('Заявки')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Заявки'}
        />
        <MenuButton
          icon={<img src={memberSearch} alt={'icon'} />}
          title="План найма"
          hasNotification={false}
          onClick={() => setActiveMenuItem('План найма')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'План найма'}
        />
        <MenuButton
          icon={<img src={jobe} alt={'icon'} />}
          title="Вакансии"
          hasNotification={true}
          onClick={() => setActiveMenuItem('Вакансии')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Вакансии'}
        />
        <MenuButton
          icon={<img src={candidate} alt={'icon'} />}
          title="Кандидаты"
          hasNotification={true}
          subMenuItems={['Основная информация', 'Задачи', 'Собеседования', 'Чат', 'Комментарии', 'История изменений']}
          onClick={() => setActiveMenuItem('Кандидаты')}
          onSubMenuClick={handleSubMenuClick}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Кандидаты'}
        />
        <MenuButton
          icon={<img src={calendar} alt={'icon'} />}
          title="Календарь"
          hasNotification={false}
          onClick={() => setActiveMenuItem('Календарь')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Календарь'}
        />
        <MenuButton
          icon={<img src={chat} alt={'icon'} />}
          title="Чат"
          hasNotification={true}
          subMenuItems={['Чат', 'Группы', 'Сообщества']}
          onClick={() => setActiveMenuItem('Чат')}
          onSubMenuClick={handleSubMenuClick}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Чат'}
        />
        <MenuButton
          icon={<img src={study} alt={'icon'} />}
          title="Обучение"
          hasNotification={false}
          onClick={() => setActiveMenuItem('Обучение')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Обучение'}
        />
        <MenuButton
          icon={<img src={star} alt={'icon'} />}
          title="Тарифы и оплата"
          hasNotification={false}
          onClick={() => setActiveMenuItem('Тарифы и оплата')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Тарифы и оплата'}
        />
        <MenuButton
          icon={<img src={settings} alt={'icon'} />}
          title="Настройки"
          hasNotification={false}
          onClick={() => setActiveMenuItem('Настройки')}
          isMenuOpen={isMenuOpen}
          isActive={activeMenuItem === 'Настройки'}
        />
      </div>
    </nav>
  );
};

export default SidebarMenu;
import React from 'react';
import Candidate from '../../Pages/Candidate/Candidate';

const ContentRenderer = ({ activeMenuItem, setActiveMenuItem }) => {
  switch (activeMenuItem) {
    case 'Рабочий стол':
      return <div>Рабочий стол</div>;
    case 'Заявки':
      return <div>Заявки</div>;
    case 'План найма':
      return <div>План найма</div>;
    case 'Вакансии':
      return <div>Вакансии</div>;
    case 'Кандидаты':
      return <div>Кандидаты</div>;
    case 'Календарь':
      return <div>Календарь</div>;
    case 'Чат':
      return <div>Чат</div>;
    case 'Обучение':
      return <div>Обучение</div>;
    case 'Тарифы и оплата':
      return <div>Тарифы и оплата</div>;
    case 'Настройки':
      return <div>Настройки</div>;
    case 'Кандидаты > Основная информация':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;
    case 'Кандидаты > Задачи':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;
    case 'Кандидаты > Собеседования':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;
    case 'Кандидаты > Чат':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;
    case 'Кандидаты > Комментарии':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;
    case 'Кандидаты > История изменений':
      return <Candidate activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />;

    default:
      return <div>Выберите пункт меню</div>;
  }
};

export default ContentRenderer;
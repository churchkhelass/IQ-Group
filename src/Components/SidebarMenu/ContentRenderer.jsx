import React from 'react';
import CandidateInfo from '../../Pages/Candidate/CandidateInfo';

const ContentRenderer = ({ activeMenuItem }) => {
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
      return <CandidateInfo />;

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
      
    case 'Основная информация':
      return <div>Основная информация кандидатов</div>;

    case 'Кандидаты > Задачи':
      return <div>Задачи кандидатов</div>;


    default:
      return <div>Выберите пункт меню</div>;
  }
};

export default ContentRenderer;
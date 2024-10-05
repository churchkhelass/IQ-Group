import React from 'react';
import './CandidateInfo.css';

const CandidateInfo = () => {
  return (
    <div className="candidate-info">
      <header className="header">
        <div className="profile">
          <div className="avatar">KB</div>
          <div className="details">
            <h2>Константинопольский Валерий Сергеевич</h2>
            <p>Телефон: +7 (927) 699-22-32</p>
            <p>Email: konstantinopol@gmail.com</p>
            <p>Telegram: @konstantinopol</p>
            <p>Источник: <span className="source">hh.ru</span></p>
            <p>Вакансия: Back-end Разработчик</p>
            <p>Рекрутер: <span className="recruiter">Александр Смагтин</span></p>
            <p>Желаемая зарплата: 100 000 ₽ - 120 000 ₽</p>
          </div>
        </div>
      </header>

      <div className="vacancies">
        <h3>Вакансии</h3>
        <div className="vacancy">
          <p>Back-end разработчик</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '0%' }} />
          </div>
        </div>
        <div className="vacancy">
          <p>Back-end разработчик</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }} />
          </div>
        </div>
        <div className="vacancy">
          <p>Back-end разработчик</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }} />
          </div>
        </div>
        <div className="vacancy">
          <p>Back-end разработчик</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }} />
          </div>
        </div>
        <p className="status">Кандидат не явился на собеседование</p>
      </div>

      <div className="comments">
        <h3>Комментарии</h3>
        <div className="comment">
          <strong>Мария Красельникова</strong>
          <p>Добавьте комментарий о наличии корпоративного ДМС...</p>
        </div>
        <div className="comment">
          <strong>Сергей Валентинов</strong>
          <p>Очень длинный...<a href="#">4.4 MB</a></p>
        </div>
        <div className="comment">
          <strong>Валерий Филатов</strong>
          <p>Нам срочно нужен разработчик в штат...</p>
        </div>
        <textarea placeholder="Комментарий" />
      </div>
    </div>
  );
};

export default CandidateInfo;
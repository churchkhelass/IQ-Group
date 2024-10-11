import React from 'react';
import './CandidateInfo.css';
import TopMenuCandidate from './Candidate.jsx';
import TelegramIcon from '../../assets/icon/telegram.svg'
import WhatsApp from '../../assets/icon/whatsapp.svg'
import Copy from '../../assets/icon/copy.svg'

const renderMainInfo = (NamePage) => {
  const itemInfoStatic = [
    'Телефон:',
    'Email:',
    'Telegram:',
    'Источник:',
    'Вакансия:',
    'Рекрутер:',
    'Желаемая зарплата:',
  ]

  const itemInfoData = [
    'Кочнев Никита Игоревич',
    ' +7 (927) 770-04-56',
    'kochnev016@gmail.com',
    '@kochnevss',
    'hh.ru',
    'Front-end Разработчик',
    'Александр Смахтин',
    '100 000 ₽ - 120 000 ₽',
  ]

  const TextInfo = (text) => {
    return (<p style={{ color: 'grey' }}>{text}</p>)
  }
  const TextData = (text) => {
    return (<p>{text}</p>)
  }
  const ImageSmall = ({ img, link }) => {
    console.log("img", img)
    return (
      <button
        style={{
          width: 20,
          height: 20,
          alignItems: 'center',
          padding: 0,
          border: '1px solid lightgrey',
          borderRadius: 5,
          background: '#fff'
        }}
        onClick={() => window.open(link, '_blank')}
      >
        <img src={img} alt={"i"} />
      </button>
    )
  }
  return (
    <div className="renderMainInfo">
      <div className="profile">
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', paddingBottom: 20 }}>{NamePage}</div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <div className="avatar" style={{color: 'white', fontSize: 36}}>{itemInfoData[0].trim().split(' ').slice(0, 2).map(word => word[0])}</div>
          <h2>{itemInfoData[0]}</h2>
        </div>
        <div className="details">
          <div className='leftColumnInfo'>
            {TextInfo(itemInfoStatic[0])}
            {TextInfo(itemInfoStatic[1])}
            {TextInfo(itemInfoStatic[2])}
            {TextInfo(itemInfoStatic[3])}
            {TextInfo(itemInfoStatic[4])}
            {TextInfo(itemInfoStatic[5])}
            {TextInfo(itemInfoStatic[6])}
          </div>
          <div className='rightColumnInfo'>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <p>{itemInfoData[1]}</p>
              {ImageSmall({ img: Copy, link: '#' })}
              <p>искать в</p>
              {ImageSmall({ img: TelegramIcon, link: 'https://t.me/kochnevss' })}
              {ImageSmall({ img: WhatsApp, link: '#' })}
            </div>
            {TextData(itemInfoData[2])}
            {TextData(itemInfoData[3])}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div className="icon" style={{backgroundColor: 'red', color: 'white'}}>hh</div>
              {TextData(itemInfoData[4])}
            </div>
            {TextData(itemInfoData[5])}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <div className="icon" style={{color: 'white'}}>
                {itemInfoData[6].trim().split(' ').slice(0, 2).map(word => word[0])}
              </div>
              {TextData(itemInfoData[6])}
            </div>
            {TextData(itemInfoData[7])}
          </div>
        </div>
      </div>
    </div>
  )
}

const Vacancies = () => {
  return (
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
    </div>)
}

const renderComent = () => {
  return (
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
  )
}
const CandidateInfo = ({ NamePage }) => {
  return (
    <>
      <div className="candidate-info">
        {renderMainInfo(NamePage)}
        <div className='columnTwo'>
          {Vacancies()}
          {renderComent()}
        </div>
      </div>
    </>
  );
};

export default CandidateInfo;
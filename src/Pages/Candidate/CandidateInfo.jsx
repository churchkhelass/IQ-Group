import React from 'react';
import './CandidateInfo.css';
import TopMenuCandidate from './Candidate.jsx';
import TelegramIcon from '../../assets/icon/telegram.svg'
import WhatsApp from '../../assets/icon/whatsapp.svg'
import Copy from '../../assets/icon/copy.svg'
import AddIcon from '../../assets/icon/addIcon.svg'
import Delete from '../../assets/icon/delete.svg'

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
    '+7 (927) 770-04-56',
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

  const ImageSmall = ({ img, link, copy }) => {
    const handleClick = () => {
      if (link) {
        window.open(link, '_blank')
      } else {
        navigator.clipboard.writeText(copy);
      }
    };
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
        onClick={handleClick}
      >
        <img src={img} alt={"i"} />
      </button>
    )
  }

  return (
    <div className="renderMainInfo">
      <div className="profile">
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', padding: 20 }}>{NamePage}</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
          <div className="avatar" style={{ color: 'white', fontSize: 36 }}>{itemInfoData[0].trim().split(' ').slice(0, 2).map(word => word[0])}</div>
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
              {ImageSmall({ img: Copy, copy: itemInfoData[1] })}
              <p>искать в</p>
              {ImageSmall({ img: TelegramIcon, link: `https://t.me/${itemInfoData[3].replace('@', '')}` })}
              {ImageSmall({ img: WhatsApp, link: `https://wa.me/${itemInfoData[1].replace(/\D/g, '')}` })}
            </div>
            {TextData(itemInfoData[2])}
            {TextData(itemInfoData[3])}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div className="iconSmall" style={{ backgroundColor: 'red', color: 'white' }}>hh</div>
              {TextData(itemInfoData[4])}
            </div>
            {TextData(itemInfoData[5])}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div className="iconSmall" style={{ color: 'white' }}>
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

  const dataStatus = ({ w, status, color }) => {
    const progressHeight = 10;
    const radius = 70;
    const innerRadius = radius - 20;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div className="vacancy" style={{ width: '90%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ fontWeight: 'bold' }}>Front-end разработчик</p>
            <p style={{ color: 'grey', fontWeight: 'bold' }}>Этап: <span style={{ color }}>{status}</span></p>
          </div>

          <div className="progress-bar" style={{ position: 'relative', width: '100%', height: `${progressHeight}px` }}>
            <div className="progress" style={{ width: `${w}%`, backgroundColor: `${color}` }} >
              {/* <svg width="100%" height={progressHeight} viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: '10' }}>
              <circle
              style={{fill: `${color}`}}
                cx="50%"
                cy="50%"
                r={innerRadius}
                // fill="white"
              />
              </svg> */}
            </div>
          </div>
        </div>
        <div
          style={{
            width: '10%',
            alignContent: 'center',
            textAlign: 'center',
          }}
        >
          <button style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            padding: 10,
            border: 0,
            borderRadius: 5,
            background: '#F6F6F6'
          }}>
            <img src={Delete} alt={"i"} />
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="vacancies">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      }}>
        <h2 style={{ margin: 0 }}>Вакансии</h2>
        <button style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          border: 0,
          borderRadius: 15,
          margin: 0,
          height: 40
        }}>
          <img src={AddIcon} alt='icon' />
          <p style={{ margin: 0, fontWeight: 'bold' }}>Добавить вакансию</p>
        </button>
      </div>
      <div style={{ padding: 20 }}>
        {dataStatus({ w: 0, status: 'Отклик', color: 'lightgrey' })}
        {dataStatus({ w: 33, status: 'Собеседование', color: '#009AC1' })}
        {dataStatus({ w: 66, status: 'Тестовое задание', color: '#F5C20B' })}
        {dataStatus({ w: 100, status: 'Утвержден', color: '#22C55E' })}
        {dataStatus({ w: 100, status: 'Не явился', color: '#EF4444' })}
      </div>
    </div>)
}

const renderComent = () => {

  const dataName = [
    'Мария Красельникова',
    'Сергей Валентинов',
    'Валерий Филатов',
  ]
  const dataMessage = [
    'Нам срочно нужен разработчик в штат...',
    'Очень длинный... 4.4 MB',
    'Нам срочно нужен разработчик в штат...',
  ]

  return (
    <div className="comments">
      <div style={{padding: 20}}>
        <h2>Комментарии</h2>
        <div className="comment">
          <strong>{dataName[0]}</strong>
          <p>{dataMessage[0]}</p>
        </div>
        <div className="comment">
          <strong>{dataName[1]}</strong>
          <p>{dataMessage[1]}</p>
        </div>
        <div className="comment">
          <strong>{dataName[2]}</strong>
          <p>{dataMessage[2]}</p>
        </div>
        <textarea placeholder="Комментарий" />
      </div>
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
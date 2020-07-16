/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import ft from './media/feature-theory.jpg'
import brhead from './media/browser-hat.png'
import vid1 from './media/trainer-animation.mp4'
import vid21 from './media/chat-animation.mp4'
import vid22 from './media/trainer-animation.mp4'

import './style/reset.css'
import './style/index.css'

const arrow = <svg width="28" height="13" viewBox="0 0 28 13" fill="none" class="faq__corner icon icon__arrow-corner-up"><path d="M26 11L14 3 2 11" stroke="currentColor" stroke-width="4" stroke-miterlimit="16" stroke-linecap="round"></path></svg>

function Button(props) {

  const btnStyle = (props.big) ?
    {
      fontWeight: '700',
      padding: '22px 40px',
      fontSize: '24px'

    } : {};

  return (
    <a href='' onClick={(e) => e.preventDefault()} className='btn' style={btnStyle}>
      {props.name}
    </a>
  )
}

function Browser(props) {
  return (
    <div className={'browser ' + props.class} style={{ width: '1000px' }}>
      {(props.head) ? <img className='browser-header' src={brhead} width='100%' alt='yo'></img> : null}
      {props.children}
    </div>
  )
}

function Card(props) {

  const style = (props.img) ? { backgroundImage: 'url(' + props.img + ')' } : null;

  return (
    <div className={props.class} style={style}>
      {(props.class === 'feedback-card') ?
        <div><div style={{ backgroundImage: 'url(' + props.avimg + ')' }}></div><span>Никита Хрулев</span></div> : null
      }
      {props.children}
    </div>
  )
}

function Dropdown(props) {
  const [open, setOpen] = useState(false)

  const arrowStyle = (open) ? { transform: 'rotate(0deg)' } : {};
  const divStyle = (!open) ? { maxHeight: '0px' } : {};

  return (
    <div className='dropdown'>
      <div onClick={() => setOpen(!open)}>{props.header}<span style={arrowStyle}>{arrow}</span></div>
      <div style={divStyle}>
        {props.children}
      </div>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <div>
      button: <br></br>
      <Button name='Войти' />
    </div>
    <div>
      big button:<br></br>
      <Button name='Войти' big />
    </div>
    <div>
      browser window:
      <Browser>
        <img src={ft} alt='feauture-theory'></img>
      </Browser>
    </div>
    <div>
      Video:
      <Browser class='name' head>
        <video autoPlay preload="auto" loop muted width='100%'>
          <source src={vid1}></source>
        </video>
      </Browser>
    </div>
    <div>
      <Card class='txt-card'>
        <h3>Технологии помогают. С ними удобно учиться</h3>
        <p>Все части курса, общение с тренерами и наставниками, переписка в чате — на одном сайте. Не нужно переключаться и отвлекаться на что-то ещё. Повторение лексики и грамматики адаптируется под ваш уровень знаний. Весь прогресс и результаты разговорной практики документируются и сохраняются.</p>
      </Card>
      <Card class='img-card' img='https://flow.yandex.ru/static/img/feature-practice.jpg'>
      </Card>
      <Card class='vid-card'>
        <video autoPlay preload="auto" muted loop>
          <source src={vid21}></source>
          <source src={vid22}></source>
        </video>
      </Card>
      <Card class='feedback-card' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
        Мне понравился формат обучения, при котором сначала идёт использование какого-то слова или оборота в&nbsp;контексте, а&nbsp;уже потом объясняется его значение&nbsp;— есть хороший шанс сначала понять правило для себя интуитивно, а&nbsp;потом уже прочитать подтверждение.
      </Card>
    </div>
    <div>
      Дропдаун: <br></br>
      <Dropdown header='Для какого уровня подходит обучение?'>
        <p>Сейчас есть два курса: Elementary и Intermediate.</p>
        <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
      </Dropdown>
      <Dropdown header='Для какого уровня подходит обучение?'>
        <p>Сейчас есть два курса: Elementary и Intermediate.</p>
        <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
      </Dropdown>
      <Dropdown header='Для какого уровня подходит обучение?'>
        <p>Сейчас есть два курса: Elementary и Intermediate.</p>
        <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
      </Dropdown>
      <Dropdown header='Для какого уровня подходит обучение?'>
        <p>Сейчас есть два курса: Elementary и Intermediate.</p>
        <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
      </Dropdown>
    </div>
    <div>
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);

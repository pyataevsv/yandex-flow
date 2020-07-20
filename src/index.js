/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom'

import ft from './media/feature-theory.jpg'


import vid1 from './media/trainer-animation.mp4'
import vid21 from './media/chat-animation.mp4'
import vid22 from './media/trainer-animation.mp4'
import { Header, Card, Button, Dropdown, Browser, fbIcon, vkIcon, ytIcon, arrow } from './components/components'
import './style/reset.css'
import './style/index.css'



function Intro(props) {
  const [curLayer, setLayer] = useState(1)

  setTimeout(() => {
    if (curLayer === 3) {
      setLayer(1)
    } else {
      setLayer(curLayer + 1);
    }
  }, 3000);


  let backgroundColor
  if (curLayer === 1) {
    backgroundColor = '#81b38e'
  } else if (curLayer === 2) {
    backgroundColor = '#ffcb48'
  } else if (curLayer === 3) {
    backgroundColor = '#ff5d48'
  }

  return (
    <div className='hero' style={{ backgroundColor }}>
      <div className='wrapper'>
        <div className='hero-h1-bx'>
          <h1>В любой непонятной ситуации&nbsp;<Span act={curLayer} /></h1>
        </div>
        <p>Простой способ решить вопросы</p>
        <div onClick={() => props.scrollTo()} className='down_button'>{arrow}</div>

      </div>
      <img className={([1].includes(curLayer)) ? 'advbase advcur' : 'advbase'} src='https://flow.yandex.ru/static/img/splash-variant-5.svg' alt='hero'></img>
      <img className={([2].includes(curLayer)) ? 'advbase advcur' : 'advbase'} src='https://flow.yandex.ru/static/img/splash-variant-2.svg' alt='hero'></img>
      <img className={([3].includes(curLayer)) ? 'advbase advcur' : 'advbase'} src='https://flow.yandex.ru/static/img/splash-variant-3.svg' alt='hero'></img>
      <img className='heroboy' src='https://flow.yandex.ru/static/img/splash-hero.svg' alt='hero'></img>

      <div className={([1].includes(curLayer)) ? 'layer1 current-layer' : 'layer1'}></div>
      <div className={([2].includes(curLayer)) ? 'layer2 current-layer' : 'layer2'}></div>
      <div className={([3].includes(curLayer)) ? 'layer3 current-layer' : 'layer3'}></div>
    </div>

  )
}

function Span(props) {
  const [inProp, setInProp] = useState(false)
  const [text, setText] = useState(1)
  let i = usePrev(props.act)
  let prevIn = usePrev(inProp)

  useEffect(() => {
    if (props.act !== i && inProp === prevIn) {
      setInProp(false)
      setTimeout(() => {
        setInProp(true)
        if (text === 3) { setText(1) } else { setText(text + 1) }
      }, 250);
    }
  }, [i, inProp, prevIn, props.act, text])

  function usePrev(value) {
    let ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }
  let innerText;
  switch (text) {
    case 1:
      innerText = <span><div>пиши&nbsp;</div><div>код&nbsp;</div></span>
      break;
    case 2:
      innerText = <span><div>изучай&nbsp;</div><div>новые&nbsp;</div><div>технологии&nbsp;</div></span>
      break;
    case 3:
      innerText = <span><div>придумывай&nbsp;</div><div>проекты&nbsp;</div></span>
      break;
    default:
      innerText = <span><div>пиши&nbsp;</div><div>код&nbsp;</div></span>
  }

  return (
    <CSSTransition in={inProp} timeout={10} appear={true} classNames="chtxt">
      {innerText}
    </CSSTransition>
  )
}

function Gotext() {

  const [letter, setLetter] = useState(0)
  const [dir, setDirection] = useState('up')
  const [item, setItem] = useState(0)

  const mas = [
    'избавиться от лишних мыслей и занятий?',
    'завести новые знакомства?',
    'получать удовольствие от проделанной работы?',
    'привить себе железную дисциплину?'
  ]

  if (dir === 'up' && letter < mas[item].length) {
    setTimeout(() => {
      setLetter(letter + 1)
    }, 50)
  }
  if (dir === 'down' && letter > 0) {
    setTimeout(() => {
      setLetter(letter - 1)
    }, 50)
  }

  if (letter === mas[item].length && dir != 'down') setTimeout(() => {
    setDirection('down')
  }, 1000);

  if (letter === 0 && dir === 'down') {
    if (item === mas.length - 1) {
      setDirection('up')
      setItem(0)
    } else {
      setItem(item + 1)
      setDirection('up')
    }
  }

  const text = mas[item].slice(0, letter)

  return (
    <h3>Как <span>{text}</span></h3>
  )
}

function App(props) {
  const [scrollYoffset, setOffset] = useState(0)
  const ref = useRef(null);
  const scrollRef = useRef()

  useEffect(() => {
    setOffset(ref.current.getBoundingClientRect().x)
    const listener = () => {
      setOffset(ref.current.getBoundingClientRect().x)
    }
    window.addEventListener('resize', listener)
    return () => {
      document.removeEventListener('resize', listener)
    }
  }, [])

  function scrollTo(ref) {
    window.scrollTo({ top: ref.current.offsetTop - 86, behavior: 'smooth' })
  }

  return (
    <div>
      <Header />
      <Intro scrollTo={() => scrollTo(scrollRef)} />
      <div ref={scrollRef} className='intro'>
        <div className='wrapper'>
          <h2 className='intro-heading'>Через полгода вы начнёте говорить на повседневные темы и перестанете бояться ошибок</h2>
          <div className='intro-fbx1'>
            <div>
              <p>Есть около 30 типичных ситуаций и сценариев. Вокруг них строятся основные диалоги: как поговорить с соседом в самолёте, как спросить дорогу к отелю или узнать пароль от вайфая. Вы освоите их, улучшите свой уровень английского, будете говорить свободно и без смущения.</p>
            </div>
            <div>
              <Card class='txt-card gotext-card'>
                <Gotext />
                <Button name='Just code' />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className='diving'>
        <div className='wrapper'>
          <h2>Погружение в языковую среду</h2>
          <p>Мы создали полноценный симулятор языковой среды, чтобы вы начали говорить на английском.</p>
          <Browser head>
            <video autoPlay preload="auto" loop muted width='100%'>
              <source src={vid1}></source>
            </video>
          </Browser>
        </div>
      </div>


      <div className='details'>
        <div className='wrapper'>
          <div>
            <h3>Теория в интерактивном тренажёре</h3>
            <p>Вы начинаете обучение в интерактивном тренажёре. Лексика, произношение, основы грамматики: больше 10 тысяч упражнений, над которыми можно работать самостоятельно в любое удобное время.</p>
          </div>
          <div>
            <Browser class='details-brw'>
              <img src={ft} alt='feauture-theory'></img>
            </Browser>
          </div>
          <div>
            <Card class='img-card details-img-f1' img='https://flow.yandex.ru/static/img/feature-practice.jpg' />
          </div>
          <div>
            <h3>Разговорная практика с тренерами</h3>
            <p>После самостоятельной работы в тренажёре — разговорная практика на звонках с разными языковыми тренерами. Звонки длятся 15 минут; забронировать звонок можно за несколько часов или за несколько дней. Даже на начальном уровне 20% времени вы будете общаться с носителями.</p>
          </div>
          <div>
            <h3>Еженедельные звонки с наставником</h3>
            <p>Раз в неделю у вас будет звонок с наставником. Наставник — это преподаватель, который сопровождает вас на протяжении всего курса. Он поможет сформировать привычку учиться, понять свои сильные и слабые стороны, будет отслеживать прогресс, научит ставить цели, преодолевать тревоги и сомнения.</p>
          </div>
          <div>
            <Card class='img-card details-img-f2' img='https://flow.yandex.ru/static/img/feature-calls.jpg' />
          </div>
          <div className='chat-card'>
            <Card class='vid-card '>
              <video autoPlay preload="auto" muted loop>
                <source src={vid21}></source>
                <source src={vid22}></source>
              </video>
            </Card>
          </div>
          <div className='chat-h3'>
            <h3>Помощь в мессенджере 24/7</h3>
            <p>Если вам что-то непонятно и хочется получить ответ прямо сейчас — пишите в чат. Преподаватели отвечают на вопросы в течение 20 минут в любое время суток.</p>
          </div>
        </div>
      </div>

      <div className='practice'>
        <div className='wrapper'>
          <h2>Разговорная практика на звонках с тренерами начнётся с первой недели</h2>
          <Button name='Начать учиться бесплатно' big />
        </div>
      </div>

      <div className='scare'>
        <div className='wrapper'>
          <div>
            <h2>Помогаем преодолеть страх и стеснение</h2>
            <p>Тренажёр, тренеры, наставники и помощь в мессенджере — ваши союзники. Здесь никто не осуждает и не ставит оценки вашим навыкам; мы создаём пространство, в котором учиться комфортно.</p>
          </div>
          <video autoPlay preload="auto" loop muted width='100%'>
            <source src={vid1}></source>
          </video>
          <div className='scare-flxbx'>
            <div>
              <h3>Среда спроектирована с нуля для онлайн обучения</h3>
              <p>Для этого потребовалось объединить усилия десятков авторов из США, Великобритании и России. Команда сценаристов, иллюстраторов, актёров озвучки, редакторов — эти люди создают образовательные материалы, которые были бы одновременно эффективны и интересны.</p>
            </div>
            <div>
              <Card class='txt-card'>
                <h3>Технологии помогают. С ними удобно учиться</h3>
                <p>Все части курса, общение с тренерами и наставниками, переписка в чате — на одном сайте. Не нужно переключаться и отвлекаться на что-то ещё. Повторение лексики и грамматики адаптируется под ваш уровень знаний. Весь прогресс и результаты разговорной практики документируются и сохраняются.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className='way'>
        <div className='wrapper'>
          <h2>Совсем другой способ учить английский онлайн</h2>
          <div>
            <ul className='learnway-ul'>
              <li>В тренажёре вы учитесь настолько много, насколько получится и захочется</li>
              <li>Упражнения имитируют ситуации, с которыми вы столкнётесь в жизни: диалоги и тексты правдоподобны и реалистичны</li>
              <li>На занятиях с тренерами — только разговорная практика, никакого совместного прокликивания упражнений</li>
              <li>Наставники помогут оценить прогресс и проработать сложности</li>
              <li>Всегда есть кто-то, кому можно задать вопрос в любое время дня</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='feedback'>
        <div className='wrapper'>
          <h2 ref={ref}>Отзывы бета-тестеров</h2>
        </div>
        <div className='feedback-scroll' style={{ marginLeft: scrollYoffset + 'px' }}>
          <div className='feedback-bx'>
            <Card class='feedback-card' username='Анна седачева' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
              Только что позанималась с тьютором. Впечатления: Ах! ох! ребята, это офигенно <span>🤝</span> Я ещё никогда так продуктивно не общалась на языке и не выходила с урока такой мотивированной подучить эту несчастную грамматику ))) Круто, что общение идёт после теории. И круто, что там всё похоже на игру. Мне было очень весело, и я чувствовала себя расслабленной —  а это так важно в обучении языку. Спасибо вам 🙂          </Card>
            <Card class='feedback-card' username='Владимир Минеев' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
              Мне понравился формат обучения, при котором сначала идёт использование какого-то слова или оборота в&nbsp;контексте, а&nbsp;уже потом объясняется его значение&nbsp;— есть хороший шанс сначала понять правило для себя интуитивно, а&nbsp;потом уже прочитать подтверждение.
          </Card>
            <Card class='feedback-card' username='Никита Хрулев' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
              Для качественного изучения английского важна хорошая программа и преподаватели. У ребят (Флоу) есть всё это и даже больше — наличие наставника, который подскажет, куда плыть и как правильно грести. Особенно это полезно тем, кто находится на плато и не знает, как дальше развивать язык! Создано людьми, которые сами обожают изучать языки и беспокоятся о качестве создаваемого продукта. В общем, однозначно лайк!          </Card>
            <Card class='feedback-card' username='Никита Хрулев' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
              Мне понравился формат обучения, при котором сначала идёт использование какого-то слова или оборота в контексте, а уже потом объясняется его значение — есть хороший шанс сначала понять правило для себя интуитивно, а потом уже прочитать подтверждение.          </Card>
            <Card class='feedback-card' username='Никита Хрулев' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
              Мне понравился формат обучения, при котором сначала идёт использование какого-то слова или оборота в&nbsp;контексте, а&nbsp;уже потом объясняется его значение&nbsp;— есть хороший шанс сначала понять правило для себя интуитивно, а&nbsp;потом уже прочитать подтверждение.
          </Card>
          </div>
        </div>

      </div>
      <div className='costs'>
        <div className='wrapper'>
          <h2>Сколько стоит</h2>
          <div className='costs-fbx'>
            <div>
              <Card class='txt-card'>
                <h2>9 800 ₽/мес</h2>
                <Button name='Попробовать' big></Button>
                <p>Можно попробовать бесплатно</p>
                <p>Вас ждёт первая неделя обучения: десятки упражнений, 4 видеосозвона с тренером и встреча с наставником</p>
              </Card>
            </div>
            <div>
              <p>Бесконечный тренажёр</p>
              <p>Основная языковая среда, в которой вы изучаете теорию и выполняете упражнения</p>
              <p>240 минут разговорной практики с тренерами</p>
              <p>16 звонков по 15 минут, которые вы бронируете сами, и много-много говорите</p>
              <p>120 минут общения с наставником</p>
              <p>Звонки раз в неделю по 30 минут с преподавателем, который сопровождает вас на протяжении всего курса</p>
              <p>Справочный чат 24/7</p>
              <p>Сюда можно писать в любой момент, когда есть вопросы, сомнения, и нужна помощь прямо сейчас</p>
            </div>
          </div>
        </div>
      </div>

      <div className='faq'>
        <div className='wrapper'>
          <h2>Часто задаваемые вопросы</h2>
          <Dropdown header='Для какого уровня подходит обучение?'>
            <p>
              Сейчас есть два курса: Elementary и Intermediate.После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.
            </p>
          </Dropdown>
          <Dropdown header='Как лучше заниматься?'>
            <p>
              В платной версии курса для каждой недели подготовлен набор материалов: четыре главы тренажёра, четыре занятия по 15 минут с тренером и 30-минутная встреча с наставником. Обучению необходимо уделять примерно 3 часа в неделю. Рекомендуем разбить это время по разным дням, чтобы знания усваивались лучше.            </p>
          </Dropdown>
          <Dropdown header='Как проходят занятия с тренерами?'>
            <p>
              Они длятся по 15 минут, всё это время вы разговариваете только по-английски. Основная задача — закрепить лексику и грамматику. Если тренер поймёт, что вы легко отвечаете на вопросы, он может дать вам немного пространства для импровизации и использования другой лексики по теме, если она есть в вашем багаже. Тренер корректирует частые ошибки, связанные с пройденным материалом. Он направляет и помогает разговориться. Если вам кажется, что вы что-то не поняли на занятии с тренером — задайте этот вопрос на еженедельной встрече с наставником.            </p>
          </Dropdown>
          <Dropdown header='Как проходит общение с наставником?'>
            <p>
              У вас есть еженедельная встреча на 30 минут. Закрепите её на определенный день и время, чтобы ваш наставник не менялся. На первой встрече вы обсудите цели обучения, оцените текущий уровень и получите советы, как адаптировать программу под себя. Затем вы будете вместе отслеживать прогресс и обсуждать вопросы, которые остались после занятий в тренажёре и с тренерами. А если возникнут сложности с мотивацией и регулярностью занятий, наставник даст совет, как вернуться в ритм.

              Встречи с наставником могут проходить как полностью на английском языке, так и частично на русском, чтобы вы могли лучше понять сказанное.            </p>
          </Dropdown>
          <Dropdown header='Чем тренер отличается от наставника?'>
            <p>
              Они решают разные задачи. Тренер должен разговорить вас и закрепить лексику, которую вы учили в тренажёре. Он корректирует только существенные или часто повторяющиеся ошибки. Наставник — человек, курирующий вас на протяжении всего обучения. Он оценивает ваш уровень на старте, формулирует вместе с вами цель, отслеживает движение к ней, объясняет непонятное. Наставник ведёт заметки и по необходимости изучает ваши занятия с тренерами. Это роль на стыке преподавателя английского и коуча.            </p>
          </Dropdown>
          <Dropdown header='Как подбирают тренеров и наставников?'>
            <p>
              Тренер — это человек, который хорошо знает язык, у него нет ярко выраженного акцента, он может заметить ошибки в речи студента и дать советы, как говорить правильно. На роль тренера мы берем как преподавателей английского, так и людей без педагогического образования, но связанных с английским языком. Например, студентов МГИМО и жителей англоговорящих стран. Тренер — это приятный собеседник, который создаёт на занятии комфортную атмосферу и помогает разговориться.

              У наставника, помимо перечисленного выше, обязательно проверяем образование (лингвистическое/педагогическое/филологическое), профессиональные сертификаты по английскому (TKT, CELTA, TESOL, DELTA), знание современной методологии преподавания языка. Все наставники имеют опыт работы от 5 лет и постоянно совершенствуют свои знания и навыки.

              Мы обучаем наставников навыкам коучинга, чтобы они помогали ученикам не только с языковыми вопросами, но и с построением привычки учиться, преодолением барьеров и самомотивацией.            </p>
          </Dropdown>
          <Dropdown header='Как посмотреть программу обучения?'>
            <p>
              Программа обучения доступна в личном кабинете во вкладке «Все главы».
            </p>
          </Dropdown>
          <Dropdown header='Фиксируется ли расписание занятий?'>
            <p>
              В привычном понимании — нет, вы сами подстраиваете занятия под свой график. Тренажёр можно проходить в любое время и в любом месте. Занятия с тренером можно назначать, ориентируясь на своё расписание: как через час, так и через несколько дней. Единственное ограничение — сначала надо пройти главу тренажёра, к которой относится занятие. А встречи с наставником рекомендуем ставить на один и тот же день и время, но можно и менять график.            </p>
          </Dropdown>
        </div>
      </div>
      <div className='faqbot'>
        <div className='wrapper'>
          <h2>Остались вопросы?</h2>
          <Button name='Спросить' />
        </div>
      </div>

      <div className='timeto'>
        <div className='wrapper'>
          <h2>Пора начать говорить</h2>
          <p>Мы сделали этот курс и обнаружили, что обучение может быть нескучным. Вы погрузитесь в новый культурный контекст и узнаете что-то уникальное, что иначе могли не узнать. У вас появится то новое, чем захочется поделиться с друзьями. А вскоре — и по-английски.</p>
          <Button name='Начать учиться бесплатно' big />
        </div>
      </div>

      <footer>
        <div className='ftr-grid'>
          <div>
            {fbIcon}
            {ytIcon}
            {vkIcon}
          </div>
          <div className='ft-links'>
            <div><span>Помощь</span></div>
            <div><span>Преподавателям</span></div>
          </div>
          <div className='ft-links'>
            <div><span>Лицензия</span></div>
            <div><span>Образовательная программа</span></div>
            <div><span>Для СМИ</span></div>
          </div>
        </div>
      </footer>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >,
  document.getElementById('root')
);



// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//     <div>
//       button: <br></br>
//       <Button name='Войти' />
//     </div>
//     <div>
//       big button:<br></br>
//       <Button name='Войти' big />
//     </div>
//     <div>
//       browser window:
//       <Browser>
//         <img src={ft} alt='feauture-theory'></img>
//       </Browser>
//     </div>
//     <div>
//       Video:
//       <Browser class='name' head>
//         <video autoPlay preload="auto" loop muted width='100%'>
//           <source src={vid1}></source>
//         </video>
//       </Browser>
//     </div>
//     <div>
//       <Card class='txt-card'>
//         <h3>Технологии помогают. С ними удобно учиться</h3>
//         <p>Все части курса, общение с тренерами и наставниками, переписка в чате — на одном сайте. Не нужно переключаться и отвлекаться на что-то ещё. Повторение лексики и грамматики адаптируется под ваш уровень знаний. Весь прогресс и результаты разговорной практики документируются и сохраняются.</p>
//       </Card>
//       <Card class='img-card' img='https://flow.yandex.ru/static/img/feature-practice.jpg'>
//       </Card>
//       <Card class='vid-card'>
//         <video autoPlay preload="auto" muted loop>
//           <source src={vid21}></source>
//           <source src={vid22}></source>
//         </video>
//       </Card>
//       <Card class='feedback-card' avimg='https://flow.yandex.ru/static/img/testimonials/kulin.png'>
//         Мне понравился формат обучения, при котором сначала идёт использование какого-то слова или оборота в&nbsp;контексте, а&nbsp;уже потом объясняется его значение&nbsp;— есть хороший шанс сначала понять правило для себя интуитивно, а&nbsp;потом уже прочитать подтверждение.
//       </Card>
//     </div>
//     <div>
//       Дропдаун: <br></br>
//       <Dropdown header='Для какого уровня подходит обучение?'>
//         <p>Сейчас есть два курса: Elementary и Intermediate.</p>
//         <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
//       </Dropdown>
//       <Dropdown header='Для какого уровня подходит обучение?'>
//         <p>Сейчас есть два курса: Elementary и Intermediate.</p>
//         <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
//       </Dropdown>
//       <Dropdown header='Для какого уровня подходит обучение?'>
//         <p>Сейчас есть два курса: Elementary и Intermediate.</p>
//         <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
//       </Dropdown>
//       <Dropdown header='Для какого уровня подходит обучение?'>
//         <p>Сейчас есть два курса: Elementary и Intermediate.</p>
//         <p>После регистрации можно выбрать уровень полегче (Elementary) или посложнее (Intermediate), затем отправиться на встречу с наставником. Он оценит ваш уровень языка и даст рекомендацию: пойти на один из текущих курсов или подождать выпуска новых.</p>
//       </Dropdown>
//     </div>
//     <div>
//     </div>
//   </React.StrictMode >,
//   document.getElementById('root')
// );

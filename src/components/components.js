/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import brhead from '../media/browser-hat.png'
import '../style/components.css'

export const arrow = <svg width="28" height="13" viewBox="0 0 28 13" fill="none" className="faq__corner icon icon__arrow-corner-up"><path d="M26 11L14 3 2 11" stroke="currentColor" strokeWidth="4" strokeMiterlimit="16" strokeLinecap="round"></path></svg>
export const flowIcon = <svg width="94" height="24" viewBox="0 0 94 24" fill="none" className="icon icon__logo"><path d="M90.764.546l-6.878 14.968L77.023.546h-2.79l8.253 17.991a4.492 4.492 0 01-3.949 2.384h-4.169v2.537h4.169a7.017 7.017 0 003.777-1.111 7.038 7.038 0 002.587-2.973L93.551.546h-2.787zM61.018 24a11.3 11.3 0 01-7.986-3.32 11.343 11.343 0 01-3.312-8.001V11.32c0-3.002 1.19-5.882 3.309-8.005A11.286 11.286 0 0161.018 0c2.996 0 5.87 1.193 7.989 3.316a11.333 11.333 0 013.31 8.005v1.358a11.346 11.346 0 01-3.314 8.001A11.3 11.3 0 0161.018 24zm0-21.463a8.767 8.767 0 00-6.196 2.576 8.803 8.803 0 00-2.57 6.208v1.358c0 2.33.923 4.563 2.567 6.21a8.757 8.757 0 0012.397 0 8.793 8.793 0 002.568-6.21V11.32a8.803 8.803 0 00-2.57-6.208 8.767 8.767 0 00-6.196-2.576zM28.13 23.454l8.873-19.307 8.872 19.307h2.786L38.135.546h-2.264L25.344 23.454h2.787zM16.031.546H9.667a9.658 9.658 0 00-6.776 2.87 9.698 9.698 0 000 13.635 9.658 9.658 0 006.776 2.87h1.917v3.533h2.532V19.92h1.915a9.651 9.651 0 006.896-2.804 9.689 9.689 0 002.865-6.883 9.705 9.705 0 00-2.865-6.883A9.666 9.666 0 0016.031.546zM9.667 17.41a7.154 7.154 0 01-5.012-2.13 7.183 7.183 0 010-10.09 7.154 7.154 0 015.012-2.13h1.917v14.35H9.667zm6.364 0h-1.915V3.06h1.915a7.148 7.148 0 015.115 2.073 7.177 7.177 0 012.126 5.102 7.188 7.188 0 01-2.126 5.102 7.16 7.16 0 01-5.115 2.073z" fill="currentColor"></path></svg>
export const fbIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="social-list__icon social-list__icon_social-fb icon icon_social-fb"><path d="M25.785 5H6.215C5.544 5 5 5.544 5 6.215v19.571C5 26.456 5.544 27 6.215 27h10.537v-8.52h-2.868v-3.32h2.868v-2.448c0-2.842 1.735-4.39 4.27-4.39 1.215 0 2.258.092 2.563.132v2.97h-1.759c-1.378 0-1.645.656-1.645 1.617v2.12h3.288l-.428 3.32h-2.86V27h5.606c.67 0 1.213-.544 1.213-1.215V6.215C27 5.544 26.456 5 25.785 5z" fill="currentColor"></path></svg>
export const vkIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="social-list__icon social-list__icon_social-vk icon icon_social-vk"><path fillRule="evenodd" clipRule="evenodd" d="M19.684 4h-7.368C5.592 4 4 5.592 4 12.316v7.368C4 26.408 5.592 28 12.316 28h7.368C26.408 28 28 26.408 28 19.684v-7.368C28 5.592 26.408 4 19.684 4zm3.438 7.621c.525 0 .644.271.525.644-.185.854-1.721 3.12-2.197 3.82-.09.134-.143.211-.14.211-.186.305-.254.44 0 .78.092.124.287.316.51.534.228.225.486.478.692.719.746.846 1.322 1.558 1.474 2.049.136.491-.102.745-.61.745h-1.744c-.463 0-.7-.265-1.209-.831a21.25 21.25 0 00-.84-.896c-1.034-1-1.491-1.135-1.745-1.135-.356 0-.457.085-.457.593v1.575c0 .423-.136.677-1.254.677-1.846 0-3.895-1.118-5.335-3.2-2.168-3.05-2.76-5.353-2.76-5.81 0-.254.084-.492.592-.492h1.761c.44 0 .61.187.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66v-2.575c-.042-.732-.297-1.05-.486-1.287-.117-.147-.209-.262-.209-.424 0-.203.17-.406.44-.406h2.744c.373 0 .509.203.509.643v3.472c0 .373.152.508.27.508.22 0 .407-.135.814-.542 1.253-1.405 2.15-3.573 2.15-3.573.12-.254.322-.492.763-.492h1.744z" fill="#4680C2"></path><path fillRule="evenodd" clipRule="evenodd" d="M19.684 4h-7.368C5.592 4 4 5.592 4 12.316v7.368C4 26.408 5.592 28 12.316 28h7.368C26.408 28 28 26.408 28 19.684v-7.368C28 5.592 26.408 4 19.684 4zm3.438 7.621c.525 0 .644.271.525.644-.185.854-1.721 3.12-2.197 3.82-.09.134-.143.211-.14.211-.186.305-.254.44 0 .78.092.124.287.316.51.534.228.225.486.478.692.719.746.846 1.322 1.558 1.474 2.049.136.491-.102.745-.61.745h-1.744c-.463 0-.7-.265-1.209-.831a21.25 21.25 0 00-.84-.896c-1.034-1-1.491-1.135-1.745-1.135-.356 0-.457.085-.457.593v1.575c0 .423-.136.677-1.254.677-1.846 0-3.895-1.118-5.335-3.2-2.168-3.05-2.76-5.353-2.76-5.81 0-.254.084-.492.592-.492h1.761c.44 0 .61.187.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66v-2.575c-.042-.732-.297-1.05-.486-1.287-.117-.147-.209-.262-.209-.424 0-.203.17-.406.44-.406h2.744c.373 0 .509.203.509.643v3.472c0 .373.152.508.27.508.22 0 .407-.135.814-.542 1.253-1.405 2.15-3.573 2.15-3.573.12-.254.322-.492.763-.492h1.744z" fill="currentColor"></path></svg>
export const ytIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="social-list__icon social-list__icon_social-yt icon icon_social-yt"><path fillRule="evenodd" clipRule="evenodd" d="M27.72 5.657c1.292.361 2.308 1.426 2.653 2.778C31 10.886 31 16 31 16s0 5.114-.627 7.565c-.345 1.352-1.361 2.417-2.652 2.778C25.38 27 16 27 16 27s-9.381 0-11.72-.657c-1.292-.361-2.308-1.426-2.653-2.778C1 21.114 1 16 1 16s0-5.114.627-7.565c.345-1.352 1.361-2.417 2.652-2.778C6.62 5 16 5 16 5s9.381 0 11.72.657zM21.5 16l-8 4.5v-9l8 4.5z" fill="currentColor"></path></svg>

export function Header(props) {

    const [isOnTop, setTopState] = useState((window.pageYOffset === 0) ? true : false);

    useEffect(() => {
        const listener = (e) => {
            if (window.pageYOffset === 0) setTopState(true)
            if (window.pageYoffset !== 0 && isOnTop === true) setTopState(false)
        }
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    })
    const headerClass = (isOnTop) ? 'top-header' : ''

    return (

        <header className={headerClass}>
            <div>
                <div className='logo-box'>
                    <div>{flowIcon}</div>
                    <div><a href='' onClick={(e) => e.preventDefault()}>английский <br></br> от Яндекс.Практикума</a></div>
                </div>
                <div className='menu-box'>
                    <Menu />
                    <div>
                        <Button name='Войти' />
                    </div>

                </div>
            </div>
        </header>
    )
}

function Menu() {
    const [active, setActive] = useState(false);

    const dropDown = (<div className='dropdown-menu'>
        <div className='dd-rect'></div>
        <ul>
            <li>Флоу (Английский язык)</li>
            <li>Python-разработчик</li>
            <li>Аналитик данных</li>
            <li>Веб-разработчик</li>
            <li>Инженер по тестированию</li>
            <li>Специалист по Data Science</li>
        </ul>
    </div>)

    return (
        <div className={(active === true) ? 'vse-cursi cursi-opened' : 'vse-cursi'}>
            <span onClick={() => setActive(!active)}><strong>Все курсы</strong></span>
            {(active === true) ? dropDown : null}
        </div>

    )
}

export function Button(props) {

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

export function Browser(props) {
    return (
        <div className={'browser ' + props.class}>
            {(props.head) ? <img className='browser-header' src={brhead} width='100%' alt='yo'></img> : null}
            {props.children}
        </div>
    )
}

export function Card(props) {

    const style = (props.img) ? { backgroundImage: 'url(' + props.img + ')' } : null;

    return (
        <div className={props.class} style={style}>
            {(props.class === 'feedback-card') ?
                <div><div style={{ backgroundImage: 'url(' + props.avimg + ')' }}></div><span>{props.username}</span></div> : null
            }
            {props.children}
        </div>
    )
}

export function Dropdown(props) {
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

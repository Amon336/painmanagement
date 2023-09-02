import { Link } from 'react-router-dom';
import logo from '../img/Frame 333.svg'
import './navigation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useWindowSize } from 'react-use';

export function Navigation() {
    const windowSize = useWindowSize();
    const isWideScreen = windowSize.width > 650
    const link = isWideScreen ? 'https://wa.me/+77052727775' : 'tel:+77052727775;';
    const [icon, setIcon] = useState(faBars);
    const [listHeight, setListHeight] = useState(0);

    function buttonFunction() {
        if(icon === faBars) {
            setIcon(faX)
            setListHeight(214)
        }else {
            setIcon(faBars)
            setListHeight(0)
        }
    }

    return (
        <>
            <header>
                <nav>
                    <Link to='/' id='logo'>
                        <img src={logo} alt="" />
                    </Link>
                    <Link to='/'>Главная</Link>
                    <Link to='/intro/1'>Услуги</Link>
                    <Link to='/workers'>Специалисты</Link>
                    <Link to='/prices/1'>Цены</Link>
                    <Link to='/advertisement'>Акции</Link>
                    <div>
                        <a href={link} target='_blank' rel="noreferrer" id='tel'><h4><span>+7 (705)</span> 272-77-75</h4></a>
                        <p>Пн-Пт с 00:00 до 00:00 <br />
                        СБ и ВС с 00:00 до 00:00</p>
                    </div>
                    <a href={'https://wa.me/+77052727775'} target='_blank' rel="noreferrer" id='btn'><span>Записаться</span></a>
                    <button onClick={buttonFunction}><FontAwesomeIcon icon={icon} /> Меню</button>
                </nav>
                <div className='mobile nav-list' style={{height : listHeight}}>
                    <Link to='' onClick={buttonFunction}>Главная</Link>
                    <Link to='/intro/1' onClick={buttonFunction}>Услуги</Link>
                    <Link to='/workers' onClick={buttonFunction}>Специалисты</Link>
                    <Link to='/prices/1' onClick={buttonFunction}>Цены</Link>
                    <Link to='/advertisement' onClick={buttonFunction}>Акции</Link>
                </div>
            </header>
        </>
    )
}
import './style.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <ul className='nav__menu'>
            <li><Link  to='/' className='nav__menu__item'>home</Link></li>
            <li><Link  to='/about' className='nav__menu__item'>about</Link></li>
            <li><Link  to='/contact' className='nav__menu__item'>contact</Link></li>
            <li><Link  to='/buy' className='nav__menu__item'>buy</Link></li>     
        </ul>
    )
}

export default Menu

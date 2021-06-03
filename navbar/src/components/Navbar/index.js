import React from 'react';
import './css/index.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className='nav__logo'>

                </div>
                <div className='nav__bars'>

                </div>
                <ul className='nav__menu'>
                    <li><Link to='/' className='nav__menu__item'>1</Link></li>
                    <li><Link to='/' className='nav__menu__item'>1</Link></li>
                    <li><Link to='/' className='nav__menu__item'>1</Link></li>
                    <li><Link to='/' className='nav__menu__item'>1</Link></li>
                    <li><Link to='/' className='nav__menu__item'>1</Link></li>     
                </ul>
            </div>
        </>
    )
}

export default Navbar

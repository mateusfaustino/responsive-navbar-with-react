import React,{useState} from 'react';
import './css/index.css';
import {Link} from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import {ReactComponent as Logo} from "./assets/images/logo.svg"

const Navbar = () => {
    const [isActive,setIsActive]=useState(false);
    return (
        <>
            <div className={isActive? "nav active": "nav"}>
                <Link to='/'>
                    <Logo className='nav__logo'/>
                </Link>
                
                <ul className='nav__menu'>
                    <li><Link onClick={()=>setIsActive(false)} to='/about' className='nav__menu__item'>about</Link></li>
                    <li><Link onClick={()=>setIsActive(false)} to='/contact' className='nav__menu__item'>contact</Link></li>
                    <li><Link onClick={()=>setIsActive(false)} to='/buy' className='nav__menu__item'>buy</Link></li>
                    <li><Link onClick={()=>setIsActive(false)} to='/learning' className='nav__menu__item'>learning</Link></li>     
                </ul>
                <MdClose onClick={()=>setIsActive(!isActive)} className='nav__icon nav__close' color=''/>
                <FaBars onClick={()=>setIsActive(!isActive)} className='nav__icon nav__bars' color=''/>
            </div>
        </>
    )
}

export default Navbar

import React,{useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Logo from "./Subcomponents/Logo/index"
import Menu from "./Subcomponents/Menu/index"

const Navbar = () => {
    const [isActive,setIsActive]=useState(false);
    return (
        <>
            <div className={isActive? "nav active": "nav"}>
                <Logo/>
                <Menu onClick={()=>setIsActive(false)}/>
                <MdClose onClick={()=>setIsActive(!isActive)} className='nav__icon nav__close' color=''/>
                <FaBars onClick={()=>setIsActive(!isActive)} className='nav__icon nav__bars' color=''/>
            </div>
        </>
    )
}

export default Navbar

import React,{useState} from 'react';
import { FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Logo from "./Logo"
import Menu from "./Menu"
import styled from 'styled-components';

const Nav= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background-color: #017f59;
    color: #fff;
    padding: 4px 10vw;
    
    .nav__icon{
        
        height:5vh ;
        width: auto;
        
        &.nav__close{
            display:${props => props.icon=='close' ? 'block' : 'none' } ;
        }
        &.nav__bars{
            display:${props => props.icon=='open' ? 'block' : 'none' } ;
        }
        &:hover{
            cursor: pointer;
        }
    }

    @media screen and (min-width: 755px) {
    
        .nav__icon {
            display: none !important;
        }
        
    
    }
    
`

const Navbar = () => {
    const [isActive,setIsActive]=useState(false);
    return (
        <>
            <Nav icon={isActive? 'close': 'open'}>
                <Logo/>
                <Menu isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <MdClose onClick={()=>setIsActive(!isActive)} className='nav__icon nav__close'/>
                <FaBars onClick={()=>setIsActive(!isActive)} className='nav__icon nav__bars'/>
            </Nav>
        </>
    )
}

export default Navbar

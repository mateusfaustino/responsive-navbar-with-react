import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #017f59;
    opacity: 95%;
    position: fixed;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    z-index: 0;
    border-top: 1px solid #fff;
    transform: translateX(${props => props.active ? '0' : '-100' }vw);
    transition: 1s;

    li{
        a{
            display: flex;
            color: #fff;
            margin-right: 16px;
            font-family: sans-serif;
            font-weight: 700;
        }
    }

    @media screen and (min-width: 755px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background-color: transparent;
            position:initial;
            width: auto;
            transform: none;
        li{
            a{
                display: flex;
        color: #fff;
        margin-right: 16px;
        font-family: sans-serif;
        font-weight: 600;
            }
        }
    }
    
`

const Menu = (props) => {
    
 return(
    <Ul  active={props.isActive? true: false} >
            <li onClick={props.setIsActive}><Link  to='/' >home</Link></li>
            <li onClick={props.setIsActive}><Link  to='/about' >about</Link></li>
            <li onClick={props.setIsActive}><Link  to='/contact' >contact</Link></li>
            <li onClick={props.setIsActive}><Link  to='/buy' >buy</Link></li>
    </Ul>
)
    
    
}

export default Menu

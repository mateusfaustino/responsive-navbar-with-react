import {Link} from 'react-router-dom';
import {ReactComponent as Brand} from "./assets/brand.svg"
import styled from 'styled-components';

const StyledLogo= styled.div`
    a{
        svg{
            fill: #fff;
            height: 6vh;
            width: auto;
        }
    }
`

const Logo = () => {
    return (
        <StyledLogo>
            <Link to='/'>
                <Brand/> 
            </Link>
        </StyledLogo>
    )
}

export default Logo

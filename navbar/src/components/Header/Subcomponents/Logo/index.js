import './style.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Brand} from "./assets/brand.svg"

const Logo = () => {
    return (
        <Link to='/'>
            <Brand className='nav__brand'/>
        </Link>
    )
}

export default Logo

import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const logo = `Logo - Devocean-task`;
    return (
        <header>
            <Link to={{ pathname: `/` }}>{logo}</Link>
        </header>
    );
};

export default Header;

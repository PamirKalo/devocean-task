import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to={{ pathname: `/` }}>Logo</Link>
        </header>
    );
};

export default Header;

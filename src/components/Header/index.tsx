import { Link } from 'react-router-dom'
import Search from '../Search';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className='header-logo'>
          <Link to="/">
            <img src="./assets/Logo.png" alt="Logo Mercado Libre" width={60} height={40} />
          </Link>
        </h1>
        <Search className='header-search' />
      </div>
    </header>
  );
}

export default Header;
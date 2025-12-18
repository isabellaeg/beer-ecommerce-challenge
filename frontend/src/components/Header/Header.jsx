import { HiMenu } from 'react-icons/hi';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <button className="header-menu-btn" onClick={() => window.alert('Menu clicked')}>
          <HiMenu size={24} />
        </button>
        <div className="header-avatar">
          <img 
            src="/icons/userIcon.jpg" 
            alt="User Avatar" 
            className="header-avatar-img"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
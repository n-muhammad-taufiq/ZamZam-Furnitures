import { useState } from 'react';
import { SearchIcon, UserIcon, CartIcon, MenuIcon } from './Icons';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </button>

        {/* Logo area */}
        <div className="logo-container">
          <div className="logo-text">
            <span className="logo-z">Z</span>
            <div className="logo-vertical">
              <span className="logo-zam">ZAM ZAM</span>
              <span className="logo-furniture">FURNITURE</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#collections" className="nav-link">Collections</a></li>
            <li><a href="#shop" className="nav-link">Shop</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="header-actions">
          <button aria-label="Search" className="icon-btn"><SearchIcon /></button>
          <button aria-label="Account" className="icon-btn"><UserIcon /></button>
          <button aria-label="Cart" className="icon-btn has-badge">
            <CartIcon />
            <span className="cart-badge">2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--menu-open' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Kiara Couture" className="navbar__logo-image" />
        </a>

        <button
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
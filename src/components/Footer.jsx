import './Footer.css';

const FOOTER_LINKS = {
  Collection: ['Evening Gowns', 'Cocktail Dresses', 'Bridal Couture', 'Custom Orders'],
  Company: ['About Us', 'Our Atelier', 'Careers', 'Press'],
  Support: ['Contact', 'FAQs', 'Size Guide', 'Shipping'],
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Kiara<span className="footer__logo-accent">Couture</span>
            </a>
            <p className="footer__tagline">
              Dubai's premier dressing boutique. Every dress
              is a statement of elegance.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" className="footer__social-link">IG</a>
              <a href="#" aria-label="Facebook" className="footer__social-link">FB</a>
              <a href="#" aria-label="Pinterest" className="footer__social-link">PT</a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4 className="footer__col-title">{title}</h4>
              <ul className="footer__col-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Kiara Couture. All rights reserved.</p>
          <p>Crafted with passion in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
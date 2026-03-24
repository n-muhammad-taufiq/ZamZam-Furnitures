import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text" style={{ marginBottom: '20px' }}>
              <span className="logo-z" style={{ background: 'white', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Z</span>
              <div className="logo-vertical">
                <span className="logo-zam" style={{ color: 'white' }}>ZAM ZAM</span>
                <span className="logo-furniture" style={{ color: 'var(--secondary-gold)' }}>FURNITURE</span>
              </div>
            </div>
            <p className="footer-desc">
              Your premier destination for luxury and modern interior design in Dubai. We transform spaces into breathtaking realities.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Pinterest">PI</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Our Services</h4>
            <ul>
              <li><a href="#">Living Room Decor</a></li>
              <li><a href="#">Bedroom Comfort</a></li>
              <li><a href="#">Dining Spaces</a></li>
              <li><a href="#">Office Interior</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-gold">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zam Zam Furnitures Dubai. All rights reserved.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

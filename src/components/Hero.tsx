import './Hero.css';
import heroImg from '../assets/hero_bg.png';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container container">
        <div className="hero-content">
          <h4 className="hero-subtitle">Premium Collections 2026</h4>
          <h1 className="hero-title">Where <span>Design</span> Meets Emotion</h1>
          <p className="hero-description">
            Discover our exclusive collection of luxury furniture tailored for the modern home. Meticulously crafted to bring together timeless elegance and cutting-edge design for your living spaces.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }}>Shop Collection</button>
            <button className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '15px' }}>Explore Design</button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>30+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>2.5K</h3>
              <p>Premium Products</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={heroImg} alt="Luxury Living Room Interior" className="hero-img" />
            <div className="hero-image-decoration"></div>
            <div className="hero-floating-card">
              <span className="card-title">Wooden Table Set</span>
              <span className="card-price">$890.00</span>
              <button className="card-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

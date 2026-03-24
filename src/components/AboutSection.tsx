import './AboutSection.css';
import aboutImg from '../assets/about_bg.png';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-container">
        <div className="about-image-column">
          <img src={aboutImg} alt="Elegant Dining Room" className="about-img" />
          <div className="about-experience-badge">
            <span className="years">30+</span>
            <span className="text">Years of<br />Excellence</span>
          </div>
        </div>
        
        <div className="about-content-column">
          <h4 className="section-subtitle">Since 1990's</h4>
          <h2 className="section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>Crafting Your Dream Spaces With <span>Brilliance</span></h2>
          <p className="about-text">
            For over three decades, Zam Zam Furnitures has been the hallmark of luxury and elegance in Dubai. We believe that furniture is more than just functional pieces; it is the soul of your home.
          </p>
          <p className="about-text">
            Our exclusive collections are meticulously curated from the finest craftsmen around the world, ensuring that every piece brings a touch of timeless sophistication to your living spaces.
          </p>
          
          <ul className="about-list">
            <li>
              <span className="check-icon">✓</span>
              Premium Quality Materials
            </li>
            <li>
              <span className="check-icon">✓</span>
              Exclusive Modern Designs
            </li>
            <li>
              <span className="check-icon">✓</span>
              Expert Interior Consultation
            </li>
          </ul>
          
          <button className="btn btn-primary mt-30">Discover Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

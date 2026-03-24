import './Features.css';

const featuresList = [
  { icon: '🚚', title: 'Quick Delivery', desc: 'Secure & fast shipping' },
  { icon: '🏬', title: 'Pick Up In Store', desc: 'Ready in 24 hours' },
  { icon: '🎁', title: 'Special Packaging', desc: 'Premium secure packaging' },
  { icon: '🔄', title: 'Return Policy', desc: '30 days worry-free' },
];

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresList.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="features-border-bottom"></div>
    </section>
  );
};

export default Features;

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import './ProductGrid.css';
import sofaImg from '../assets/product_sofa.png';
import tableImg from '../assets/product_table.png';
import chairImg from '../assets/product_chair.png';

const products = [
  { id: 1, name: 'Navy Velvet Sofa', category: 'Living Room', price: '$1,299.00', image: sofaImg },
  { id: 2, name: 'Marble Luxe Table', category: 'Dining Room', price: '$899.00', image: tableImg },
  { id: 3, name: 'Crimson Accent Chair', category: 'Living Room', price: '$599.00', image: chairImg },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="products-section section-padding" id="shop">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Trending Products</h4>
          <h2 className="section-title">Discover Our Featured <span>Masterpieces</span></h2>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-actions">
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-bottom">
                  <span className="product-price">{product.price}</span>
                  <button className="cart-icon-btn" aria-label="Add to cart">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-50">
          <button className="btn btn-outline">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

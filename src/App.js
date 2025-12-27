import React from 'react';
import useFetch from './hooks/useFetch'; 
import './App.css';
function App() {
  
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  // Loading state
  if (loading) {
    return (
      <div className="container">
        <h1 className="task-title">Photos</h1>
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container">
        <h1 className="task-title">Photos</h1>
        <p className="error-message">Error: {error}</p>
        <p>Could not fetch data. Please try again later.</p>
      </div>
    );
  }

  // Data display state
  return (
    <div className="container">
      <h1 className="task-title">Photos</h1>
      <div className="product-grid">
        {products && products.slice(0, 12).map((product) => ( // Pehle 12 products hi dikhayenge jaisa image mein hai
          <div className="product-card" key={product.id}>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
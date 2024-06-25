import React from 'react';
import Product from './Product';

const ProductList = () => {
  // Örnek ürün verileri
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;

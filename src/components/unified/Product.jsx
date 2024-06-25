import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div style={{ border: '1px solid #dee2e6', padding: '10px', margin: '10px 0' }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;

// ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Dummy product data (replace with actual API call)
  const product = { id: id, name: `Product ${id}`, price: 10 }; 

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      {/* Add more details such as description, images, etc. */}
    </div>
  );
}

export default ProductDetailPage;

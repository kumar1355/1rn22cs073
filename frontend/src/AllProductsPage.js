import React, { useEffect, useState } from "react";
import ApiService from "./ApiService";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiService.getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>All Products</h1>
      {products.map(p => (
        <div key={p.productId}>
          <h2>{p.productName}</h2>
          <p>Price: {p.price}</p>
          <p>Rating: {p.rating}</p>
          <p>Discount: {p.discount}</p>
          <p>Availability: {p.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProductsPage;

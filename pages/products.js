import { useEffect, useState } from "react";
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 10))) 
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

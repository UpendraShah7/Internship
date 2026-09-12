import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get<Product[]>(
        "https://fakestoreapi.com/products",
      );
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;



  
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductDrawer from "../components/AddProductDrawer";
import { getProducts } from "../services/ProductServices";
import type { Product } from "../types/product";
import type { ProductFormData } from "../schema/productSchema";
import { Spin, Button } from "antd";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

 useEffect(() => {
  getProducts()
    .then((data) => {
      const customProducts = JSON.parse(localStorage.getItem("customProducts") || "[]");
      setProducts([...customProducts, ...data]);
    })
    .catch((err) => console.error("Failed to load products:", err))
    .finally(() => setLoading(false));
}, []);

const handleAddProduct = (data: ProductFormData) => {
  const newProduct: Product = { id: Date.now(), ...data };

  setProducts((prev) => [newProduct, ...prev]);

  const existingCustom = JSON.parse(localStorage.getItem("customProducts") || "[]");
  localStorage.setItem("customProducts", JSON.stringify([newProduct, ...existingCustom]));
};

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">All Products</h1>
        <Button type="primary" onClick={() => setDrawerOpen(true)}>
          + Add Product
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <AddProductDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}

export default Products;
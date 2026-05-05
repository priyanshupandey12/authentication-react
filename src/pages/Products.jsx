import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product.api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchProducts();

        if (res.success) {
          setProducts(res.data.data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    load();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border rounded-lg p-4 shadow">
          <img
            src={p.thumbnail}
            className="w-full h-40 object-cover rounded"
          />

          <h2 className="font-semibold mt-2 line-clamp-2">
            {p.title}
          </h2>

          <p className="text-sm text-gray-500">
            {p.brand}
          </p>

          <p className="font-bold mt-1">
            ₹{p.price}
          </p>

          <p className="text-xs text-gray-400">
            Rating: {p.rating}
          </p>
        </div>
      ))}
    </div>
  );
}
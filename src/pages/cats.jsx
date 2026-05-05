import { useEffect, useState } from "react";
import { fetchRandomCat } from "../services/cats.api";

export default function Cats() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetchRandomCat();
      if (res.success) {
        setCat(res.data); // single object
      } else {
        setError("Failed to load cat");
      }
    } catch {
      setError("API error");
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow rounded-xl p-4">
        <img
          src={cat.url}
          alt="Random Cat"
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={load}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          New Cat
        </button>

        <button
          onClick={() => window.open(cat.url, "_blank")}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Open Full
        </button>
      </div>
    </div>
  );
}
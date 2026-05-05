import { useEffect, useState } from "react";
import { fetchQuotes } from "../services/quotes.api";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchQuotes();

        if (res.success) {
          setQuotes(res.data.data);
        } else {
          setError("Failed to load quotes");
        }
      } catch (err) {
        setError("API error");
      }
      setLoading(false);
    };

    load();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {quotes.map((q) => (
        <div
          key={q.id}
          className="bg-white shadow rounded-xl p-4 border"
        >
          <p className="text-sm text-gray-800 leading-relaxed">
            “{q.content}”
          </p>

          <p className="mt-3 text-xs text-gray-500 text-right">
            — {q.author}
          </p>
        </div>
      ))}
    </div>
  );
}
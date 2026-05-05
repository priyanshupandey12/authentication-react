import { useEffect, useState } from "react";
import { fetchJokes } from "../services/jokes.api";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetchJokes();
      if (res.success) {
        setJokes(res.data.data);
        setIndex(0);
      } else {
        setError("Failed to load jokes");
      }
    } catch {
      setError("API error");
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % jokes.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + jokes.length) % jokes.length);
  };

  const random = () => {
    const r = Math.floor(Math.random() * jokes.length);
    setIndex(r);
  };

  const copy = () => {
    if (!jokes[index]) return;
    const text = `${jokes[index].content} — ${jokes[index].author || "Unknown"}`;
    navigator.clipboard.writeText(text);
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!jokes.length) return <p className="p-6">No jokes</p>;

  const joke = jokes[index];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6">
      <div className="max-w-xl bg-white shadow rounded-xl p-6 text-center">
        <p className="text-lg leading-relaxed">
          {joke.content}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          — {joke.author || "Unknown"}
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={prev} className="px-4 py-2 bg-gray-300 rounded">
          Prev
        </button>

        <button onClick={next} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>

        <button onClick={random} className="px-4 py-2 bg-purple-500 text-white rounded">
          Random
        </button>

        <button onClick={copy} className="px-4 py-2 bg-green-500 text-white rounded">
          Copy
        </button>

        <button onClick={load} className="px-4 py-2 bg-black text-white rounded">
          Refresh
        </button>
      </div>
    </div>
  );
}
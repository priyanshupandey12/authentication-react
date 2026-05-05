import { useEffect, useState } from "react";
import { fetchMeals } from "../services/meals.api";
import MealCard from "../components/meal";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchMeals();

        if (res.success) {
          setMeals(res.data.data);
          setFiltered(res.data.data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    load();
  }, []);

  // search filter
  useEffect(() => {
    const result = meals.filter((m) =>
      m.strMeal.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, meals]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* Search */}
      <input
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-6 rounded"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
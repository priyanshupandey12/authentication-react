export default function MealCard({ meal }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold text-sm line-clamp-2">
          {meal.strMeal}
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          {meal.strCategory} • {meal.strArea}
        </p>
      </div>
    </div>
  );
}
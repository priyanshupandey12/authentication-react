import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users.api";
import UserCard from "../components/UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetchUsers();

      if (res.success) {
        setUsers(res.data.data);
        setFiltered(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  // search by name
  useEffect(() => {
    const result = users.filter((u) => {
      const fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
      return fullName.includes(search.toLowerCase());
    });
    setFiltered(result);
  }, [search, users]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={load}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Refresh
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </div>
  );
}
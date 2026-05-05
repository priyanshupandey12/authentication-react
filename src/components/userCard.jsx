export default function UserCard({ user }) {
  const name = `${user.name.first} ${user.name.last}`;

  return (
    <div className="bg-white shadow rounded-xl p-4 flex gap-4 items-center">
      <img
        src={user.picture.large}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />

      <div>
        <h2 className="font-semibold text-sm">{name}</h2>

        <p className="text-xs text-gray-500">{user.email}</p>

        <p className="text-xs text-gray-500">
          {user.location.city}, {user.location.country}
        </p>

        <p className="text-xs text-gray-400">
          Age: {user.dob.age}
        </p>
      </div>
    </div>
  );
}
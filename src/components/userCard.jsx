export default function UserCard({ user, isExpanded, onToggle }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
      <div className="text-right">
        <button onClick={onToggle}>{isExpanded ? "Collapse" : "Expand"}</button>
      </div>
      {isExpanded && (
        <div className="mt-4 p-3 border-t border-gray-200 text-sm text-gray-700">
          <p>Additional user info goes here...</p>
        </div>
      )}
    </div>
  );
}

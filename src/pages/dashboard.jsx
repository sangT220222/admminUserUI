import { users } from "../data/userList";
import UserCard from "../components/userCard";
import { useState } from "react";

export default function Dashboard() {
  const [expandedUserId, setExpandedUserID] = useState(null);

  return (
    // p- = padding on all sides
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        {/* grid makes div a parent container */}
        {/* grid-cols-... define 3 equal width columns */}
        {/* gap-6 adds spacing between rows and columns */}
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              isExpanded={expandedUserId === user.id}
              onToggle={() => {
                setExpandedUserID(expandedUserId === user.id ? null : user.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

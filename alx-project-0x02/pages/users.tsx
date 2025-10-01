import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard"; // ✅ no {}

import { UserProps } from "@/interfaces";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} /> // ✅ spreading props
      ))}
    </div>
  );
};

export default UsersPage;

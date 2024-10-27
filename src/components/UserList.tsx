import { FC } from 'react';
import { User } from '@/types/user';

interface UserListProps {
  users: User[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User List</h2>
      <ul className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-4 hover:bg-gray-100 transition"
          >
            <span className="font-medium text-gray-700">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

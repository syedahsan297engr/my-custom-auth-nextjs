// import { UserList } from '@/components/UserList';
// import { getUsers } from '@/services/userService';

// // This is the page component where we will display the list of users
// export default async function UsersPage() {
//   const users = await getUsers();  // Fetch users from API route (mimicking the database call)
  
//   return (
//     <div>
//       <h1>User List</h1>
//       <UserList users={users} />
//     </div>
//   );
// }


import { UserList } from '@/components/UserList';
import { User } from '@/types/user';

// Fetch users via the API route
async function fetchUsers(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/api/users'); // Calling our API route
  // when work on actual application will make a separate instance for this so I don't have to repeat the base URL every time
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

// UsersPage component that fetches data from the API
export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
      <UserList users={users} />
    </div>
  );
}
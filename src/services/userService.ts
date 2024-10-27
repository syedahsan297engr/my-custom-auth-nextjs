import users from "@/data/users.json";
import { User } from "@/types/user";

// Simulating an async database call
export async function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500); // Simulate a delay
  });
}

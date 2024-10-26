import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/libs/session";

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export const loginUser = async (email: string, password: string) => {
  if (email === "ahsan@gmail.com" && password === "pass123$") {
    await createSession("1"); // for demonstration purposes
    return {
      success: true,
      message: "Login successful!",
    };
  }
  throw new Error("Invalid credentials");
};

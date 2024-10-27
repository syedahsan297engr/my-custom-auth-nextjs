import { NextResponse } from "next/server";
import { getUsers } from "@/services/userService";

// API handler for fetching users
export async function GET() {
  try {
    const users = await getUsers(); // Simulating database call
    return NextResponse.json(users); // Returning response as JSON
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users", error },
      { status: 500 }
    );
  }
}

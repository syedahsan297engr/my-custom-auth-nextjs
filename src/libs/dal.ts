"use server";

import { cookies } from "next/headers";
import { decrypt } from "./session";
//import { redirect } from "next/navigation";

export const verifySession = async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  console.log(session);
  // if (!session?.userId) {
  //   redirect("/login");
  // }

  return { isAuth: true, userId: session?.userId };
};

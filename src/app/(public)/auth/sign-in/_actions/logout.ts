"use server";

import { signOut } from "@/app/_lib/auth";

export async function logout() {
  await signOut();
}

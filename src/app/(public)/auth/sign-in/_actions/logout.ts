"use server";

import { signOut } from "../../../../_lib/auth";

export async function logout() {
  await signOut();
}

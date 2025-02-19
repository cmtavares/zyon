"use server";

import { signOut } from "../../../../_lib/auth";

export async function logout() {
  try {
    await signOut();
  } catch (error) {
    console.error(error);
  }
}

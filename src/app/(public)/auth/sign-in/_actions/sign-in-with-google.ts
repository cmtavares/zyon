"use server";

import { signIn } from "../../../../_lib/auth";

export async function signInWithGoogle() {
  try {
    await signIn("google");
  } catch (error) {
    console.error(error);
  }
}

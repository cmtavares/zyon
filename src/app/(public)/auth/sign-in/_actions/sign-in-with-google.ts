"use server";

import { signIn } from "../../../../_lib/auth";

export async function signInWithGoogle() {
  await signIn("google");
}

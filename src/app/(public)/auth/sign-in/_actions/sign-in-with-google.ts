"use server";

import { signIn } from "@/app/_lib/auth";

export async function signInWithGoogle() {
  await signIn("google");
}

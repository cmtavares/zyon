import { redirect } from "next/navigation";
import { auth } from "../_lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    redirect("/auth/sign-in");
  }

  return <>{children}</>;
}

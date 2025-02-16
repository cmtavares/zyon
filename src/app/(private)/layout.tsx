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

  return (
    <div className="flex min-h-screen flex-col gap-16">
      <div className="flex flex-1">{children}</div>
      <div className="flex flex-col gap-4"></div>
    </div>
  );
}

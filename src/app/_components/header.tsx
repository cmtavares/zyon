"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { FileTextIcon, LogInIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { logout } from "../(public)/auth/sign-in/_actions/logout";

export function Header() {
  const theme = useTheme();
  const session = useSession();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          {theme.resolvedTheme === "dark" ? (
            <Link href="/" className="flex gap-4">
              <Image
                src="/logo-light.svg"
                width={50}
                height={40}
                alt="Zyon Logo"
              />
              <h1 className="text-2xl font-bold">Zyon</h1>
            </Link>
          ) : (
            <Link href="/" className="flex gap-4">
              <Image
                src="/logo-dark.svg"
                width={50}
                height={40}
                alt="Zyon Logo"
              />
              <h1 className="text-2xl font-bold">Zyon</h1>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <MenuIcon size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="space-y-2">
              {!session.data ? (
                <>
                  <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                    <SheetDescription className="border-b border-solid text-left">
                      Acesse o Zyon e suas funcionalidades.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="flex w-full justify-start"
                      asChild
                    >
                      <Link
                        href="/auth/sign-in"
                        className="flex items-center gap-2"
                      >
                        <LogInIcon size={16} />
                        Fazer login
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="flex w-full justify-start"
                      asChild
                    >
                      <Link
                        href="/terms-and-conditions"
                        className="flex items-center gap-2"
                      >
                        <FileTextIcon size={16} />
                        Termos e condições
                      </Link>
                    </Button>
                  </SheetClose>
                </>
              ) : (
                <>
                  <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                    <SheetDescription className="border-b border-solid text-left">
                      Todas as funcionalidades do Zyon.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetClose asChild>
                    <Button
                      onClick={() => logout()}
                      variant="outline"
                      className="flex w-full items-center justify-start gap-2"
                    >
                      <LogInIcon size={16} />
                      Sair
                    </Button>
                  </SheetClose>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

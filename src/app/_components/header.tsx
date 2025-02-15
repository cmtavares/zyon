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

export function Header() {
  const theme = useTheme();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          {theme.resolvedTheme === "dark" ? (
            <Image
              src="/logo-light.svg"
              width={50}
              height={40}
              alt="Zyon Logo"
            />
          ) : (
            <Image
              src="/logo-dark.svg"
              width={50}
              height={40}
              alt="Zyon Logo"
            />
          )}
          <h1 className="text-2xl font-bold">Zyon</h1>
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
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
                <SheetDescription className="border-b border-solid text-left">
                  Acesse o Zyon e suas funcionalidades.
                </SheetDescription>
              </SheetHeader>
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-start gap-2"
                  asChild
                >
                  <Link href="/">
                    <LogInIcon size={16} />
                    <span className="block">Fazer login</span>
                  </Link>
                </Button>
              </SheetClose>
              <Button
                variant="outline"
                className="flex w-full items-center justify-start gap-2"
                asChild
              >
                <Link href="/terms-and-conditions">
                  <FileTextIcon size={16} />
                  <span className="block">Termos e condições</span>
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

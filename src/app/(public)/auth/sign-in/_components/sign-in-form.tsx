"use client";

import { sendMagicLink } from "@/app/(public)/auth/sign-in/_actions/send-magic-link";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { signInWithGoogle } from "../_actions/sign-in-with-google";
import { BorderBeam } from "@/app/_components/magicui/border-beam";
import { useQueryState } from "nuqs";
import Link from "next/link";

const initialState = {
  errors: {},
  message: "",
};

export function SignInForm() {
  const [email, setEmail] = useQueryState("message");
  const [state, dispatch, pending] = useActionState(
    sendMagicLink,
    initialState,
  );

  useEffect(() => {
    if (state.success && state.message) {
      toast.success(state.message);
    }

    if (!state.success && state.message) {
      toast.error(state.message);
      state.message = "";
    }
  }, [state]);

  return (
    <>
      <div className="mx-auto mt-6 flex max-w-screen-xl items-center justify-center px-4 py-6">
        <div className="w-96 max-w-screen-md">
          <div className="flex flex-col gap-6">
            <h1 className="text-gradient text-center text-4xl font-bold tracking-tight">
              Acessar o Zyon
            </h1>
            <Button onClick={() => signInWithGoogle()}>
              <Image
                src="/google-icon.svg"
                width={24}
                height={24}
                alt="Google icon"
              />
              Continuar com google
            </Button>
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="flex-1 border-t"></span>
              ou continuar com e-mail
              <span className="flex-1 border-t"></span>
            </div>
          </div>
        </div>
      </div>
      <form action={dispatch} className="m-auto w-96">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className={`${state.errors?.email && "text-red-700"}`}
          >
            E-mail
          </Label>
          <Input
            placeholder="exemplo@exemplo.com"
            disabled={pending || state.success}
            name="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          {state.errors?.email &&
            state.errors.email.map((error) => (
              <p
                key={error}
                aria-live="polite"
                className="text-xs text-red-700"
              >
                {error}
              </p>
            ))}
        </div>
        <Button
          variant="outline"
          disabled={pending || state.success}
          type="submit"
          className="over-flow-hidden relative mt-2 w-full"
        >
          <BorderBeam className="absolute inset-0 dark:from-white dark:to-slate-900/10" />
          {state.success
            ? "Link enviado!"
            : pending
              ? "Enviando..."
              : "Continue com e-mail"}
        </Button>
      </form>
      <div className="mx-auto mt-4 flex max-w-sm flex-col items-center justify-center">
        <p className="mb-2 text-xs text-muted-foreground">
          Se você optar por fazer login com e-mail, enviaremos um link de acesso
          para a sua caixa de entrada.
        </p>
        <p className="text-xs text-muted-foreground">
          Ao fazer login, você concorda com nossos{" "}
          <Link href="/terms-and-conditions" className="font-bold text-primary">
            Termos e condições
          </Link>{" "}
          e{" "}
          <Link href="/terms-and-conditions" className="font-bold text-primary">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </>
  );
}

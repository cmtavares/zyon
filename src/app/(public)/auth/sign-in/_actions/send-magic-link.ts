"use server";

import { z } from "zod";
import { signIn } from "../../../../_lib/auth";

const formSchema = z.object({
  email: z
    .string({ message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
});

type State = {
  errors?: {
    email?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function sendMagicLink(_prevState: State, formData: FormData) {
  const validateData = formSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validateData.success) {
    return {
      errors: validateData.error.flatten().fieldErrors,
      message: "Por favor, preencha o campo corretamente.",
    };
  }

  try {
    signIn("resend", formData);

    return {
      success: true,
      message:
        "🎉 Nós enviamos um link para o seu e-mail. Verifique sua caixa de entrada.",
    };
  } catch {
    return {
      success: false,
      message: "Erro ao enviar o e-mail. Por favor, tente novamente.",
    };
  }
}

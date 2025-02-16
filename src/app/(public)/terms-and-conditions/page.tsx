"use client";

import { FileTextIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Page() {
  const theme = useTheme();

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-6 py-10 lg:py-16">
      <div
        className={`w-full max-w-lg rounded-xl p-6 transition-all lg:max-w-3xl lg:p-10 xl:max-w-4xl ${
          theme.resolvedTheme === "dark"
            ? "bg-white text-black shadow-lg"
            : "bg-black text-gray-100 shadow-md"
        }`}
      >
        <div className="flex items-center justify-center">
          <FileTextIcon size={30} />
          <h1 className="ml-4 text-3xl font-bold md:text-4xl">
            Termos e Condições
          </h1>
        </div>
        <p className="mt-4 text-lg">
          Bem-vindo à Zyon, uma plataforma digital que fornece serviços para
          facilitar a gestão de relacionamento com clientes (CRM) de maneira
          eficiente e intuitiva. Nossa missão é simplificar processos e otimizar
          a comunicação empresarial para nossos usuários.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Definições</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Zyon:</strong> Plataforma digital desenvolvida para otimizar
            a gestão de relacionamento com clientes.
          </li>
          <li>
            <strong>Usuário:</strong> Pessoa física ou jurídica que utiliza a
            Zyon para gerenciar seu relacionamento com clientes.
          </li>
          <li>
            <strong>Cliente Final:</strong> Pessoa ou empresa com quem o Usuário
            mantém relacionamento por meio da Zyon.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Aceitação dos Termos</h2>
        <p>
          Ao utilizar a Zyon, você concorda com os termos aqui descritos, bem
          como com as disposições da Lei Geral de Proteção de Dados (LGPD - Lei
          13.709/2018). Reservamo-nos o direito de modificar este documento a
          qualquer momento, disponibilizando a versão atualizada em nosso site.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Cadastro e Responsabilidades do Usuário
        </h2>
        <p>
          Para utilizar a Zyon, o Usuário deve criar uma conta e fornecer
          informações precisas e atualizadas. O Usuário é responsável por
          proteger suas credenciais e não compartilhá-las com terceiros.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Proibições e Penalidades
        </h2>
        <p>
          É proibido utilizar a Zyon para atividades ilegais, fraudes ou
          violações das leis brasileiras. Qualquer uso indevido resultará na
          suspensão ou cancelamento da conta do Usuário.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Privacidade e Proteção de Dados
        </h2>
        <p>
          A Zyon coleta e processa dados pessoais de acordo com a LGPD,
          garantindo a segurança e confidencialidade das informações dos
          Usuários.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Contato</h2>
        <p>
          Para dúvidas ou suporte, entre em contato pelo e-mail:{" "}
          <a
            href="mailto:suporte@zyon.com"
            className={`underline ${
              theme.resolvedTheme === "dark"
                ? "text-blue-600 hover:text-blue-500"
                : "text-blue-400 hover:text-blue-300"
            }`}
          >
            suporte@zyon.com
          </a>
        </p>
      </div>
    </div>
  );
}

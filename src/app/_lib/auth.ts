import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import Resend from "next-auth/providers/resend";

const html = ({ url }: { url: string }) => {
  return `
    <body style="background: #f9f9f9; font-family: Arial, sans-serif;">
      <table width="100%" border="0" cellspacing="20" cellpadding="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px;">
        <tr>
          <td align="center" style="padding: 10px 0; font-size: 22px; color: #333;">
            Sign in to Zyon
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <a href="${url}" style="padding: 10px 20px; background-color: #346df1; color: #fff; text-decoration: none; border-radius: 5px;">Sign in</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-size: 16px; color: #666;">
            If you did not request this email, you can safely ignore it.
          </td>
        </tr>
      </table>
    </body>
  `;
};

const text = ({ url }: { url: string }) => {
  return `Sign in to Zyon: ${url}\n\nIf you didn't request this, you can ignore this email.`;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AUTH_RESEND_KEY}`,
          },
          body: JSON.stringify({
            from,
            to: email,
            subject: "Sign in to Zyon",
            html: html({ url }),
            text: text({ url }),
          }),
        });
        if (!res.ok) {
          throw new Error("Resend error" + JSON.stringify(await res.json()));
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});

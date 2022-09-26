import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

import prisma from "../src/lib/Prisma";

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.NEXTAUTH_EMAIL_SERVER,
      from: process.env.NEXTAUTH_EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
});

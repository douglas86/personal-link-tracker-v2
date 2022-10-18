import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../src/lib/api/prisma";

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Email from "next-auth/providers/email";

import { keys } from "../../../src/lib/api/keys";

const { secret } = keys;
const { email_server, email_client } = keys;
const { google_client, google_secret } = keys;
const { github_client, github_secret } = keys;

export default NextAuth({
  providers: [
    Email({ server: email_server, from: email_client }),
    Google({ clientId: google_client, clientSecret: google_secret }),
    Github({ clientId: github_client, clientSecret: github_secret }),
  ],
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  secret,
});

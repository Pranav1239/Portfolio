import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./connect";

export const AuthOptions = {
  //   adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(AuthOptions);

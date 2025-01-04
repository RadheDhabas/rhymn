import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { z } from "zod";
import { getUser } from "./app/actions/userAuthAction";
import { UserType } from "./app/types/user";

// Helper function to generate an access token
const generateAccessToken = async ({
  accessToken,
  user,
  isRefresh,
}: {
  accessToken?: string;
  user: any;
  isRefresh: boolean;
}) => {
  // Implement your access token logic
  // Example: Return a new JWT token
  return `newAccessToken-${user.id}-${Date.now()}`;
};

declare module "next-auth" {
  interface User extends UserType {}
}

declare module "next-auth/adapters" {
  interface AdapterUser extends UserType {}
}

declare module "next-auth/jwt" {
  interface JWT extends UserType {}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials){
        try {
          // Validate input using zod schema
          const parsedCredentials = z
            .object({
              email: z.string().email(),
              password: z.string().min(6),
            })
            .safeParse(credentials);

          if (!parsedCredentials.success) {
            return null;
          }

          const { email, password } = parsedCredentials.data;

          const userInfo = await getUser(email, password);
          if (!userInfo || userInfo.success === false) {
            return null;
          }
          if (userInfo.user) {
            return {
              id: userInfo.user.id.toString(),
              email: userInfo.user.userEmail,
              name: userInfo.user.name,
              image:userInfo.user.avatarUrl
            };
          }
          return null;
        } catch (error) {
          console.error('Error in authorize function:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60, // 15 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn() {
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id?.toString() || "";
        token.email = user.email || "";
        token.name = user.name || "Unknown";
        token.image = user.image || ""; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id, // Ensure ID is a string
          email: token.email || "", // Ensure email is a string
          name: token.name || "Unknown", // Fallback for name
          image: token.image || "",
          emailVerified: null,
        };
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        // Append base URL to the relative URL
        return `${baseUrl}${url}`;
      }
      return url;
    }
  },
  pages: {
    signIn: "/sign-in",
  },
});

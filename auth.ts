import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { z } from "zod";


const getUser = async (email: string) => {
  // Replace this with your actual database query logic
  // Example: Fetch user by email from a database
  return {
    id: "123",
    email: email,
    password: "$2b$10$somehashedpassword",
    name: "John Doe",
    image: "/path/to/image",
    userId: "uniqueUserId",
    isEmailVerified: true,
  };
};

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

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        // Validate input using zod schema
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          console.log(user);
          if (!user) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            userId: user.userId,
            isEmailVerified: user.isEmailVerified,
          };

        }

        console.log("Invalid credentials");
        return null;
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
      return token
    },
    session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});

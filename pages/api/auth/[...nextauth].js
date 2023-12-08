import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Dummy provider for testing
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials.username === 'test' && credentials.password === 'test') {
          return { id: 1, name: 'Test User', email: 'test@example.com' };
        } else {
          return null;
        }
      }
    }),
  ],
  database: process.env.DATABASE_URL,
});

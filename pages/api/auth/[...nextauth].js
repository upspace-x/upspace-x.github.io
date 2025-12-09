import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin', // optional custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // ✅ required for encryption
  debug: true, // ✅ helpful for deployment logs
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub; // attach user ID from token
      }
      return session;
    },
  },
});
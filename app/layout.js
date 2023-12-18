import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/projects.css";
import "../styles/cursor.css";
import "../sass/star.scss";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

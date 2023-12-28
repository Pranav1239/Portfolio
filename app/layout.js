import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/projects.css";
import "../styles/cursor.css";
import "../styles/modal.css";
import "../sass/star.scss";
import "../sass/card.scss";
import "../sass/text.scss";
import "../sass/btn.scss";
import { AuthProvider } from "@/providers/AuthProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pranav7",
  description:
    "Passionate web developer with expertise in responsive design and Next.js. Explore a showcase of dynamic websites blending creativity with code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            {children}

            <Analytics />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

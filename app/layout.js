// app/layout.js or app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah | Web Developer Portfolio",
  description:
    "I'm Abdullah, a passionate web developer skilled in React, Next.js, and modern UI/UX. Explore my projects, skills, and contact information here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`bg-gray-50 dark:bg-[#0a0a0a] text-black dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <main className="min-h-[100vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

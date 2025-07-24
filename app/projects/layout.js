// app/layout.js or app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
  title: "Projects | Abdullah's Work",
  description: "Explore my featured projects — from full-stack web apps to frontend-only builds. Filter by live projects or GitHub-only work.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <main className="min-h-[100vh]">{children}</main>
        </>
    );
}

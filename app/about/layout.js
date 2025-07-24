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
  title: "About | Learn More About Abdullah",
  description: "I'm a self-driven web developer focused on building intuitive, responsive, and scalable web apps using React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <main className="min-h-[100vh]">{children}</main>
        </>
    );
}

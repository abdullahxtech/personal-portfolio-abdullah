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
  title: "Contact | Get in Touch with Abdullah",
  description: "Interested in working together or have a question? Reach out to me directly via this contact form.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <main className="min-h-[100vh]">{children}</main>
        </>
    );
}

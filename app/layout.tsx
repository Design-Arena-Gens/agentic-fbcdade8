import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Полярное свечение | Авторская песня",
  description:
    "Современная авторская песня о северном сиянии, свободе и внутреннем свете.",
  metadataBase: new URL("https://agentic-fbcdade8.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playground | Three Games. Two Players.",
  description: "Play Tic-Tac-Toe, Connect Four, and Rock Paper Scissors with a friend on one screen.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uniproject 抱負サイト",
  description: "新年の抱負をみんなで共有しましょう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}

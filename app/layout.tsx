import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const font = localfont({
  src: './fonts/typography.ttf'
})

export const metadata: Metadata = {
  title: "ripple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}

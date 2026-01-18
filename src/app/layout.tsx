import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "THAT TAROT PRIESTESS | Intuitive Tarot Readings",
  description: "Unlock the wisdom of the cards with personalized tarot readings. Discover clarity, guidance, and insight for your life's journey with our experienced tarot reader.",
  keywords: "tarot reading, tarot cards, psychic reading, spiritual guidance, intuitive reading, love reading, career guidance",
  openGraph: {
    title: "THAT TAROT PRIESTESS | Intuitive Tarot Readings",
    description: "Discover clarity and guidance through the wisdom of the tarot. Book your personalized reading today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

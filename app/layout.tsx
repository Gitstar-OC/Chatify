import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme.provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RoutesContext } from "@/context/routes.context";
import { Toaster } from "@/components/ui/sonner";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatify - AI-Powered Personal Assistant GPT",
  description:
    "Explore and interact with any WEBPAGE, PDF, CSV, TXT and many more effortlessly using chatify, the free AI-powered tool designed for everyone.",
  keywords: [
    "Om Chandankar",
    "Upstash rag chat",
    "Upstash sdk",
    "Chat with pdf",
    "Chat with website",
    "Chat with csv",
    "Acternity UI",
    "chatify",
    "Ai",
    "Gpt",
    "Personal assistant",
    "Chat with ai",
    "Chat with gpt",
    "Chat with chatify",
  ],
  authors: [
    {
      name: "Om Chandankar",
      url: "https://theme-verse.com",
    },
  ],
  creator: "Om Chandankar",
  openGraph: {
    images: [
      {
        url: "https://i.imgur.com/ffeIgzW.png",
        width: 1200,
        height: 627,
        alt: "chatify - AI-Powered Personal Assistant GPT",
      },
    ],
  },
  metadataBase: {
    host: "https://chatify.theme-verse.com",
    href: "/",
    origin: "https://chatify.theme-verse.com",
    password: "chatify",
    hash: "chatify",
    pathname: "/",
    search: "",
    username: "theme-verse",
    hostname: "chatify.theme-verse.com",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://chatify.theme-verse.com",
    toJSON: () => "https://chatify.theme-verse.com",
  },
};

const protectedRoutes = ["/chat", "/memories", "/c", "/spaces"];
const publicRoutes = ["/", "/gatway"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RoutesContext
          protectedRoutes={protectedRoutes}
          publicRoutes={publicRoutes}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </RoutesContext>
        <Toaster />
        {/* vercel analytics and speed insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

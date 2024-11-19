import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// theme provider
import{ ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Owen's Portfolio",
	description: "Owen's Portfolio using Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.variable
				)}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<Navbar></Navbar>
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

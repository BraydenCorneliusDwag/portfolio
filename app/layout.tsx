import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import AutoplayBackground from "@/lib/autoplay";

const bestTen = localFont({
	src: "../public/fonts/BestTen-DOT.otf",
	variable: "--font-bestten",
	display: "block", // important for pixel fonts (no blur)
});

const roboto = Roboto_Serif({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Brayden (bdwag) Patrick",
	description: "Marketing Strategist and Digital Designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${bestTen.variable} ${geistSans.variable} ${geistMono.variable} ${roboto.variable} h-full antialiased bg-stone-50 scroll-smooth`}
		>
			<body className="min-h-full">
				<Nav />
				<AutoplayBackground />
				{children}
				<Footer />
			</body>
		</html>
	);
}

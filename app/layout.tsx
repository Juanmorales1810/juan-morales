import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";


export const viewport: Viewport = {
	themeColor: [
		{ color: "#18181b", media: "(prefers-color-scheme: light)" },
		{ color: "#18181b", media: "(prefers-color-scheme: dark)" },
	],
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col w-full bg-gradient-to-br from-purple-100 via-fuchsia-100 to-violet-200 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-neutral-900">
						<div className="absolute z-0 h-full w-full bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
						<main className="mx-auto w-full flex-grow">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}

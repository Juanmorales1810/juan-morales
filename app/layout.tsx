import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";

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
					"bg-background font-sans antialiased bg-gradient-to-br from-purple-100 via-fuchsia-100 to-violet-200 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-neutral-900",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col w-full">
						<main className="mx-auto w-full flex-grow">
							{children}
						</main>
						{/* <footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer> */}
					</div>
				</Providers>
			</body>
		</html>
	);
}

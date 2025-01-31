export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="relative z-50 flex flex-col min-h-screen items-center gap-4 py-8 md:py-10">
			<div className="inline-block justify-start">
				{children}
			</div>
		</section>
	);
}

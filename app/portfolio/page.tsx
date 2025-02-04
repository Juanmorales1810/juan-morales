"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Repo {
	id: number;
	full_name: string;
	name: string;
	description: string;
	html_url: string;
	created_at: string;
	language: string;
	image: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

interface Stats {
	name: string;
	login: string;
	avatarUrl: string;
	contributionsCollection: {
		contributionCalendar: {
			totalContributions: number;
		};
	};
}

export default function AboutPage() {
	const [repos, setRepos] = useState([]);
	const [stats, setStats] = useState<Stats | null>(null);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const perPage = 10;

	useEffect(() => {

		const fetchStats = async () => {
			const response = await fetch("/api/github-stats");
			const data = await response.json();
			setStats(data.data.viewer);
		};

		const fetchRepos = async () => {
			try {
				const response = await fetch(`/api/github?page=${page}&per_page=${perPage}`); // Llamamos a una API interna para seguridad
				if (!response.ok) throw new Error("Error al obtener los repositorios");
				const data = await response.json();
				setRepos(data);
			} catch (error) {
				setError((error as Error).message);
			} finally {
				setLoading(false);
			}
		};
		fetchStats();
		fetchRepos();
	}, [page]);

	const handleNextPage = () => {
		setPage(prevPage => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setPage(prevPage => Math.max(prevPage - 1, 1));
	};

	return (
		<section className="py-32">
			<div className="container">
				<div className="mb-8 md:mb-14 lg:mb-16">
					<Link href="/" className="mb-4 text-md font-medium text-primary-foreground hover:underline">
						Volver
					</Link>
					<h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
						Porfolio
					</h1>
					<p>En esta sección podrás encontrar todos los proyectos que he realizado a lo largo de mi carrera.</p>
				</div>
				{stats && (
					<div className="mb-10 flex flex-col items-center gap-4">
						<img className="w-24 h-24 rounded-full" src={stats.avatarUrl} alt={stats.login} />
						<h2 className="text-2xl font-semibold">{stats.name}</h2>
						<p className="text-muted-foreground">@{stats.login}</p>
						<p className="text-lg font-medium">
							Commits este año: {stats.contributionsCollection.contributionCalendar.totalContributions}
						</p>
					</div>
				)}
				<div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
					{repos.map((repo: Repo) => (
						<a key={repo.id} href={repo.html_url} className="group flex flex-col">
							<div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
								<div className="h-full w-full transition duration-300 group-hover:scale-105">
									<img
										src={`https://opengraph.githubassets.com/${repo.id}/${repo.full_name}`}
										alt={`Preview de ${repo.name}`}
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.src = `https://opengraph.githubassets.com/1/${repo.full_name}`;
										}}
										className="aspect-[3/2] h-full w-full object-fill object-center"
									/>
								</div>
							</div>
							<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground">
								{repo.language || "Sin lenguaje"}
							</div>
							<div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
								{repo.name}
							</div>
							<div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
								{repo.description || "Sin descripción"}
							</div>
							<div className="flex items-center gap-2">
								<span className="relative flex shrink-0 overflow-hidden rounded-full size-12">
									<img className="aspect-square h-full w-full" src={repo.owner.avatar_url} />
								</span>
								<div className="flex flex-col gap-px">
									<span className="text-xs font-medium">{repo.owner.login}</span>
									<span className="text-xs text-muted-foreground">{new Date(repo.created_at).toLocaleDateString()}</span>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
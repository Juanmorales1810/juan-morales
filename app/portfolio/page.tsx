"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Repo {
	id: number;
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

export default function AboutPage() {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch("/api/github"); // Llamamos a una API interna para seguridad
				if (!response.ok) throw new Error("Error al obtener los repositorios");
				const data = await response.json();
				setRepos(data);
			} catch (error) {
				setError((error as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchRepos();
	}, []);

	console.log(repos)

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
				<div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
					{repos.map((repo: Repo) => (
						<a key={repo.id} href={repo.html_url} className="group flex flex-col">
							<div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
								<div className="h-full w-full transition duration-300 group-hover:scale-105">
									<img
										src={`https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/cover.png`}
										onError={(e) => (e.currentTarget.src = repo.image)} // Si no carga `cover.png`, usa OpenGraph
										alt={repo.name}
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
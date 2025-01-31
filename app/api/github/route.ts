import { NextResponse } from "next/server";

export async function GET() {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Usa variables de entorno
    const GITHUB_API_URL = "https://api.github.com/user/repos";

    if (!GITHUB_TOKEN) {
        return NextResponse.json(
            { error: "Falta el token de GitHub" },
            { status: 500 }
        );
    }

    try {
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los repositorios");
        }

        const data = await response.json();

        // Agregar imagen de Open Graph a cada repositorio
        interface Repo {
            owner: {
                login: string;
            };
            name: string;
            [key: string]: any; // To allow other properties
        }

        interface RepoWithImage extends Repo {
            image: string;
        }

        const reposWithImages: RepoWithImage[] = (data as Repo[]).map(
            (repo: Repo) => ({
                ...repo,
                image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
            })
        );

        return NextResponse.json(reposWithImages);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 }
        );
    }
}

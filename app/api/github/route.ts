import { NextResponse } from "next/server";

export async function GET() {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_API_URL =
        "https://api.github.com/user/repos?sort=created&direction=desc";

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
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { NextResponse } from "next/server";

export async function GET() {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

    if (!GITHUB_TOKEN) {
        return NextResponse.json(
            { error: "Falta el token de GitHub" },
            { status: 500 }
        );
    }

    const query = {
        query: `
      {
        viewer {
          login
          avatarUrl
          name
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `,
    };

    try {
        const response = await fetch(GITHUB_GRAPHQL_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
        });

        if (!response.ok) {
            throw new Error("Error al obtener estadísticas");
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 }
        );
    }
}

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Juan Morales - Frontend Developer",
    description:
        "Desarrollador Frontend especializado en React, Next.js, Astro y React Native. Vivo en Argentina - San Juan.",
    navItems: [
        {
            label: "Portfolio",
            href: "/portfolio",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ],

    links: {
        github: "https://github.com/Juanmorales1810",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};

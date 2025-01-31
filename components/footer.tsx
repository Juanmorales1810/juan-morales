import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="relative z-50 container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-center text-muted-foreground">
                        © {new Date().getFullYear()} - Hecho con ❤️ en San Juan, Argentina
                    </p>
                    <p className="text-center text-muted-foreground">
                        Desarrollado por{' '}
                        <a
                            href="https://github.com/Juanmorales1810"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary"
                        >
                            Juan Morales
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

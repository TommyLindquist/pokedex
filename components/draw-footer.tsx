import DrawLogo from "./draw-logo";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
                <div className="flex items-center gap-3">
                    <DrawLogo text="Pokédex" src="/Logo.png" textColor="text-white" />
                </div>

                <p className="text-gray-300 text-lg">Explore the world of Pokémon</p>
                {/* Social Icons */}
                <div className="flex gap-6 mt-4">
                    <section style={{ fontFamily: 'var(--iconsSocialMedia15Colr)', fontSize: '3.125rem' }}>
                        <a className={"mr-4"}>
                            f
                        </a>
                        <a>
                            i
                        </a>
                    </section>
                </div>
            </div>
        </footer>
    )
}
import NavMain from "@/components/nav-main";
import ListTypes from "@/components/list-types";
import { Suspense } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import PokeeCardsByTypeWrapper from "@/components/pokee-cards-by-type-wrapper";

export default async function Types({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string[] | string | undefined }>;
}) {
    const { pokeesByType = "" } = await searchParams;

    return (
        <main>
            <header className="relative flex items-center justify-center px-6 py-4 bg-white border-b border-transparent">
                {/* Gradient line at bottom */}
                <div className="absolute bottom-[-1] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                <div className="flex w-full max-w-6xl items-center justify-between">
                    <Logo text="Pokédex" src="/Logo.png" />
                    <NavMain />
                </div>
            </header>

            <section className="relative flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
                {/* Gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
                <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
            </section>

            <ListTypes />
            <section className="flex flex-wrap justify-center gap-4 bg-gray-100 p-8">
                <Suspense
                    key={pokeesByType as string}
                    fallback={
                        <div className="animate-pulse w-58 h-65 bg-neutral-400/70 border rounded border-neutral-400 p-4">
                            Loading...
                        </div>
                    }>
                    <PokeeCardsByTypeWrapper type={pokeesByType as string} />
                </Suspense>
            </section>
            <footer className="bg-gray-900 text-white py-10 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-3">
                        <Logo text="Pokédex" src="/Logo.png" textColor="text-white" />
                    </div>

                    <p className="text-gray-300 text-lg">Explore the world of Pokémon</p>
                    {/* Social Icons */}
                    <div className="flex gap-6 mt-4">
                        <a>
                            <Image src="/Facebook.svg" alt="Facebook logo" width={100} height={100} className={`w-full h-full object-cover`} />
                        </a>
                        <a>
                            <Image src="/Instagram.svg" alt="Instagram logo" width={100} height={100} className={`w-full h-full object-cover`} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
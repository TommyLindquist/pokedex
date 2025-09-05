import { Ability, Pokemon } from "@/lib/interfaces";
import CircleImage from "./circle-image";
import TextOutliner from "./text-outliner";
import Paralellogram from "./paralellogram";
import ParallelogramOutlineText from "./paralellogram-outline-text";
import BadgeTextOutline from "./badge-text-outline";

export default function PokeeCard({ pokemon, className }: { pokemon: Pokemon, className?: string }) {
    // const {pokemonabilities: [{ability: {abilitynames}}]} = pokemon; // retain for future use ...
    const { pokemonabilities, pokemonstats, } = pokemon;
    const { pokemonsprites: [{ sprites: { other } }] } = pokemon;
    const stats = pokemonstats.splice(0, 3) // failsafe ...

    // retain for future use ...
    // const abilityNames = pokemonabilities.map(
    //   (item) => item.ability.abilitynames[0].name
    // );

    const bgColorByType = `bg-color-${pokemon.pokemontypes[0].type.name}`;
    const { pokemontypes } = pokemon;
    return (
        <section className={`w-54 h-84 p-4 border-4 border-blue-800 bg-blue-200 rounded-lg shadow-lg text-center text-neutral-100 outline-amber-700 ${className || ""}`}>
            <div className="flex justify-center mb-2">
                <CircleImage url={other["official-artwork"].front_default} title={pokemon.name} w={200} h={300}
                    className={`border-${pokemontypes[0]?.type?.name}`} />
            </div>
            {/* ID of pokemon: */}
            {/* <span className={`px-1 py-[-2] rounded-full text-xs font-semibold opacity-70 text-neutral-100 ${bgColorByType}`}>{`#${String(pokemon.id).padStart(3, '0')}`}</span> */}
            <div className="flex justify-center">
                <ParallelogramOutlineText
                    className={`w-fit px-4 py-[0.5] text-xs font-semibold opacity-70 text-neutral-100`}
                    bgcolour={bgColorByType}
                    text={`#${String(pokemon.id).padStart(3, '0')}`}
                    tag="section"
                    textOutlinerProps={{
                        className: "text-xs font-semibold",
                        outlineStrength: 6,
                        multiplier: 1.5,
                        textcolour: "text-neutral-100",
                        outlinecolour: "text-black"
                    }}
                />
            </div>
            {/* name of pokemon: */}
            <h1 className="truncate max-w-full text-2xl font-semibold">
                <TextOutliner text={pokemon.name} outlineStrength={3} multiplier={1.8} className="text-2xl font-semibold" />
            </h1>
            {/* badges: */}
            <section className="flex flex-wrap justify-center gap-2 mt-2">
                {pokemontypes.map((item) => (
                    <span
                        key={item.type.name}
                    >
                        <BadgeTextOutline
                            className={`px-2 py-1 rounded-full text-xs font-semibold text-neutral-100`}
                            bgcolour={`bg-color-${item.type.name}`}
                            text={item.type.name}
                            tag="section"
                            textOutlinerProps={{
                                className: "text-xs font-semibold",
                                outlineStrength: 6,
                                multiplier: 1.5,
                                textcolour: "text-neutral-100",
                                outlinecolour: "text-black"
                            }}
                        />
                    </span>
                ))}
            </section>
            {/* stats: */}
            <section className="mt-2 space-y-1 min-h-[4rem]">
                {
                    stats.map((stat) => (
                        <div key={stat.stat.name} className="flex justify-between">
                            <span className="text-sm font-bold"><TextOutliner text={stat.stat.name} className="text-sm font-bold" /></span>
                            <span className="text-sm font-bold"><TextOutliner text={stat.base_stat} className="text-sm font-bold" /></span>
                        </div>
                    ))
                }
            </section>
        </section>

    )

}
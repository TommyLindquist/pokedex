import { fetchPokemonByNames } from "@/lib/data/fetch-pokemons-by-names";
import DataError from "./data-error";
import PokeeCard from "./pokee-card";

export default async function PokemonGrid({ names }: { names: string[] }) {
  const pokees = await fetchPokemonByNames(names);
  return (
    "error" in pokees ?
      <DataError message="Failed to get the media." error={pokees.error} />
      :
      pokees.map((item, idx) =>
        "pokeData" in item && item.pokeData.pokemon
          ?
          <PokeeCard key={idx} className="p-4" pokemon={item.pokeData.pokemon[0]} />
          : null
      )
  )
}
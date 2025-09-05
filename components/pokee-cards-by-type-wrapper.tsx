import { fetchPokemonByType } from "@/lib/data/fetch-pokemons-by-type";
import { error } from "@/lib/util";
import PokemonGrid from "./pokemon-grid";

export default async function PokeeCardsByTypeWrapper({ type }: { type: string }) {
  const names = await fetchPokemonByType(type);
  if (!names) return null;
  "error" in names && error("Oh no, something unintended happened ...");

  return (
    <PokemonGrid names={names as string[]} />
  )
}

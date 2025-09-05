export const error = (message: string) => {
  throw new Error(String(message));
}

import { fetchSamplePokemonsGetNameId } from "@/lib/data/fetch-pokemon-name-id"
import { TPokeeDataOrError } from "./types";
import { searchPokee } from "./data/data-service";
import { fetchPokemonByNames } from "./data/fetch-pokemons-by-names";
import { PokeeSearch, Pokemon } from "./interfaces";

export async function getRandomNames(nrOfNames: number)
  : Promise<string[]> {

  let pokemonNamesAndIds = await fetchSamplePokemonsGetNameId();
  "error" in pokemonNamesAndIds && error(pokemonNamesAndIds.error);
  pokemonNamesAndIds = pokemonNamesAndIds as { name: string; id: number }[];

  const names: string[] = [];
  for (let i = 0; i < nrOfNames; i++) {
    let n = Math.floor((pokemonNamesAndIds.length - 1) * Math.random());
    names.push(pokemonNamesAndIds.splice(n, 1)[0].name);
  }

  return names;
}

const getFirstFinding = async (query: string): Promise<TPokeeDataOrError> => {
  const result = await searchPokee(query.toLowerCase());
  if (result && result.length > 0) {
    const names = result.map((item: { name: string }) => item.name.toLowerCase());
    const pokees = await fetchPokemonByNames(names);
    return pokees;
  }
  return [];
}

export const AnySearchResult = async (query: string): Promise<Pokemon | null> => {
  const res = await getFirstFinding(query);
  let searchResult: PokeeSearch | null = null;
  if (!("error" in res)) {
    const data = res as unknown as PokeeSearch[];
    if (Array.isArray(data) && data.length > 0) {
      searchResult = data[0];
    }
  }
  const pokeData = searchResult?.pokeData;
  const pokemon = pokeData && "pokemon" in pokeData
    ? pokeData.pokemon?.[0]
    : null;
  return pokemon;
}

export const emojiMap: Record<string, string> = {
  normal: "⚪️",
  fighting: "🥊",
  flying: "🕊️",
  poison: "☠️",
  ground: "🌍",
  rock: "🪨",
  bug: "🐛",
  ghost: "👻",
  steel: "⚙️",
  fire: "🔥",
  water: "💧",
  grass: "🌱",
  electric: "⚡",
  psychic: "🧠",
  ice: "❄️",
  dragon: "🐉",
  dark: "🌑",
  fairy: "✨",
  stellar: "🌟",
  unknown: "❓",
  shadow: "🕶️",
};
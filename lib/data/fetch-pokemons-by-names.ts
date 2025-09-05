import { FetchWithRetryOptions } from "@/lib/interfaces";
import { fetchPokemonByName } from "./fetch-pokemons-by-name";
import { TPokeeDataOrError } from "@/lib//types";


export async function fetchPokemonByNames(
    names: string[],
    opt?: FetchWithRetryOptions
): Promise<TPokeeDataOrError> {
    try {
        const pokemons = await Promise.all(names.map(n => fetchPokemonByName(n, opt)));
        return pokemons as TPokeeDataOrError;
    } catch (error) {
        return { error: String(error) };
    }
}
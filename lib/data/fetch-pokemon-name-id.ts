import { FetchWithRetryOptions, PokemonNameId } from "@/lib/interfaces";
import { fetchWithRetry } from "@/lib/data/data-service";

const query = `
    query samplePokeAPIquery {
    gen3_species: pokemonspecies(where: {generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
        name
        id
    }
    # You can run multiple queries at the same time
    # Counts how many pokemon where release for each generation
    generations: generation {
        name
        pokemon_species: pokemonspecies_aggregate {
        aggregate {
            count
        }
        }
    }
}
  `;

const url = 'https://graphql.pokeapi.co/v1beta2';

const createOptionIfNotExist = (opt?: FetchWithRetryOptions)
    : FetchWithRetryOptions => {
    (opt = opt || {}) && !opt.init && Object.assign(opt, {
        init: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': '*/*',
            },
            body: JSON.stringify({
                query
            }),
        }
    });
    return opt;
}

export async function fetchSamplePokemonsGetNameId(
    opt?: FetchWithRetryOptions
): Promise<PokemonNameId[] | { error: string }> {
    try {
        const response = await fetchWithRetry(url, createOptionIfNotExist(opt));
        const { data: { gen3_species } } = await response.json();
        return gen3_species;
    } catch (error) {
        return { error: String(error) };
    }
}
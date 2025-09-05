import { FetchWithRetryOptions, PokeeData } from "@/lib/interfaces";
import { fetchWithRetry } from "@/lib/data/data-service";

function buildQuery({
    name,
    generation,
    version,
}: {
    name: string;
    generation?: string | null;
    version?: string | null;
}) {
    const generationFilter = generation
        ? `generation: { name: { _eq: "${generation}" } },`
        : "";

    const versionFilter = version
        ? `version: { name: { _eq: "${version}" } },`
        : "";

    return `
    query getFullPikachuData {
      pokemon(where: { name: { _eq: "${name}" } }) {
        id
        name
        height
        weight
        pokemonabilities {
          ability {
            abilitynames(where: { language: { name: { _eq: "en" } } }) {
              name
            }
          }
        }
        pokemonsprites {
          sprites
        }
        pokemontypes {
          type {
            name
          }
        }
        pokemonstats(where: {
          stat: { name: { _in: ["hp", "attack", "defense"] } }
        }) {
          base_stat
          stat {
            name
          }
        }
      }

      pokemonspecies(where: {
        name: { _eq: "${name}" }
        ${generationFilter}
      }) {
        pokemonspecy {
          is_baby
          is_legendary
          is_mythical
        }
        pokemonspeciesflavortexts(where: {
          language: { name: { _eq: "en" } }
          ${versionFilter}
        }) {
          flavor_text
          version {
            name
          }
        }
      }
    }
  `;
}
const url = 'https://graphql.pokeapi.co/v1beta2';

const createOptionIfNotExist = (query: string, opt?: FetchWithRetryOptions)
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

export async function fetchPokemonByName(
    name: string,
    opt?: FetchWithRetryOptions
): Promise<{ pokeData: PokeeData } | { error: string }> {
    try {
        const query = buildQuery({
            name: name,
            // Filters ...
            generation: "generation-i", // or "generation-i" or null
            version: "platinum"     // or "platinum" or null
        });
        const response = await fetchWithRetry(url, createOptionIfNotExist(query, opt));
        const { data: { pokemon, pokemonspecies } } = await response.json();
        return { pokeData: { pokemon, pokemonspecies } };
    } catch (error) {
        return { error: String(error) };
    }
}

/**
 * Fetch data from a URL with retry logic.
 * @param input The URL to fetch.
 * @param opt Optional parameters for the fetch request.
 * @returns A promise that resolves to the response data.
 * usage:
 * fetchWithRetry('https://api.example.com/data')
 * .then(response => response.json())
 * .then(data => console.log('Fetched data:', data))
 * .catch(error => console.error('Fetch failed:', error));
 */
export async function fetchWithRetry(
  input: string | URL | globalThis.Request,
  opt?: {
    init?: RequestInit,
    retries?: number,
    delay?: number
  }
): Promise<Response> {
  const { init, retries = 3, delay = 1750 } = opt || {};
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(input, init);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (attempt < retries) {
        console.warn(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.log(`All ${retries} attempts failed.`);
        throw error;
      }
    }
  }

  throw new Error("Unexpected error in fetchWithRetry");
}

// https://github.com/PokeAPI/pokeapi/blob/master/graphql/v1beta2/examples/searchForPokemonInGerman.gql
const url = 'https://graphql.pokeapi.co/v1beta2';

const buildQuery = (searchFor: string) => `
  query {
    pokemonspecies(
      where: {
        pokemonspeciesnames: {
          language: { name: { _eq: "en" } }
          name: { _regex: "${searchFor}.*" }
        }
      }
    ) {
      id
      pokemonspeciesnames(where: { language: { name: { _eq: "en" } } }) {
        name
      }
    }
  }
`;

export async function searchPokee(searchFor: string)
  : Promise<{ id: string, name: string }[]> {
  return searchFor && searchFor.trim() && (async () => {
    searchFor = searchFor.charAt(0).toUpperCase() + searchFor.slice(1);

    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: buildQuery(searchFor)
      }),
    });
    const result = await data.json();
    const res = result.data.pokemonspecies.map(({ id, pokemonspeciesnames }
      : { id: string, pokemonspeciesnames: [{ name: string }] }) => ({
        id,
        name: pokemonspeciesnames[0]?.name ?? 'Unknown',
      }));

    return res;
  })() || {};
}
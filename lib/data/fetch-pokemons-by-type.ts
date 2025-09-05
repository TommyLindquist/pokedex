const url = 'https://graphql.pokeapi.co/v1beta2';

export async function fetchPokemonByType(type: string): Promise<string[] | { error: string }> {
  const query = `
    query getPokemonByType {
      pokemon(where: {
        pokemontypes: {
          type: {
            name: { _eq: "${type}" }
          }
        }
      }) {
        name
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({ query }),
    });

    const { data: { pokemon } } = await response.json();
    let names = [] as string[];
    pokemon.map((item: { name: string }) => names.push(item.name));

    return names;
  } catch (error) {
    return { error: String(error) };
  }
}
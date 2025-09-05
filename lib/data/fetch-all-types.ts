const url = 'https://graphql.pokeapi.co/v1beta2';

export async function fetchAllTypes(): Promise<{ type: { id: number; name: string }[] }> {
  const query = `
    query getAllPokemonTypes {
      type {
        id
        name
      }
    }
  `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}
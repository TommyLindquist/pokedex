import PokeeCard from "./pokee-card";
import { AnySearchResult } from "@/lib/util";

export default async function PokeeCardWrapper({ query }: { query: string }) {
  const pokemon = await AnySearchResult(query);

  if (!pokemon) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-8">
      <PokeeCard className="p-4" pokemon={pokemon} />
    </div>
  )
}

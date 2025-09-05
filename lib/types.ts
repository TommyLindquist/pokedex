import { PokeeData } from "./interfaces";

export type TPokeeDataOrError =
  | { pokeData: PokeeData }[]
  | { pokeData: PokeeData, error: string }[]
  | { error: string }[]
  | { error: string };
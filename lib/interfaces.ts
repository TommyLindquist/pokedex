export interface FetchWithRetryOptions {
  init?: RequestInit;
  retries?: number;
  delay?: number;
}

export interface PokemonNameId {
  name: string;
  id: number;
}

export interface PokeeData {
  pokemon: Pokemon[];
  pokemonspecies: Pokemonspecy2[];
}

export interface PokeeSearch {
  pokeData: {
    pokemon: Pokemon[];
  };
  pokemonspecies: Pokemonspecy2[];
}

export interface Pokemonspecy2 {
  pokemonspecy: Pokemonspecy;
  pokemonspeciesflavortexts: Pokemonspeciesflavortext[];
}

export interface Pokemonspeciesflavortext {
  flavor_text: string;
  version: Abilityname;
}

export interface Pokemonspecy {
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemonabilities: Pokemonability[];
  pokemonsprites: Pokemonsprite[];
  pokemontypes: Pokemontype[];
  pokemonstats: Pokemonstat[];
}

export interface Pokemonstat {
  base_stat: number;
  stat: Abilityname;
}

export interface Pokemontype {
  type: Abilityname;
}

export interface Pokemonsprite {
  sprites: Sprites;
}

export interface Sprites {
  other: Other;
  versions: Versions;
  back_shiny: string;
  back_female: string;
  front_shiny: string;
  back_default: string;
  front_female: string;
  front_default: string;
  back_shiny_female: string;
  front_shiny_female: string;
}

export interface Versions {
  'generation-i': Generationi;
  'generation-v': Generationv;
  'generation-ii': Generationii;
  'generation-iv': Generationiv;
  'generation-vi': Generationvi;
  'generation-iii': Generationiii;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

export interface Generationviii {
  icons: Icons;
}

export interface Icons {
  front_female: string;
  front_default: string;
}

export interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

export interface Generationiii {
  emerald: Officialartwork;
  'ruby-sapphire': Rubysapphire;
  'firered-leafgreen': Rubysapphire;
}

export interface Rubysapphire {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

export interface Generationvi {
  'x-y': Home;
  'omegaruby-alphasapphire': Home;
}

export interface Generationiv {
  platinum: Animated;
  'diamond-pearl': Animated;
  'heartgold-soulsilver': Animated;
}

export interface Generationii {
  gold: Gold;
  silver: Gold;
  crystal: Crystal;
}

export interface Crystal {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
  back_shiny_transparent: string;
  front_shiny_transparent: string;
}

export interface Gold {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

export interface Generationv {
  'black-white': Blackwhite;
}

export interface Blackwhite {
  animated: Animated;
  back_shiny: string;
  back_female: string;
  front_shiny: string;
  back_default: string;
  front_female: string;
  front_default: string;
  back_shiny_female: string;
  front_shiny_female: string;
}

export interface Animated {
  back_shiny: string;
  back_female: string;
  front_shiny: string;
  back_default: string;
  front_female: string;
  front_default: string;
  back_shiny_female: string;
  front_shiny_female: string;
}

export interface Generationi {
  yellow: Yellow;
  'red-blue': Yellow;
}

export interface Yellow {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

export interface Other {
  home: Home;
  showdown: Showdown;
  dream_world: Dreamworld;
  'official-artwork': Officialartwork;
}

export interface Officialartwork {
  front_shiny: string;
  front_default: string;
}

export interface Dreamworld {
  front_female?: any;
  front_default: string;
}

export interface Showdown {
  back_shiny: string;
  back_female: string;
  front_shiny: string;
  back_default: string;
  front_female: string;
  front_default: string;
  back_shiny_female?: any;
  front_shiny_female: string;
}

export interface Home {
  front_shiny: string;
  front_female: string;
  front_default: string;
  front_shiny_female: string;
}

export interface Pokemonability {
  ability: Ability;
}

export interface Ability {
  abilitynames: Abilityname[];
}

export interface Abilityname {
  name: string;
}
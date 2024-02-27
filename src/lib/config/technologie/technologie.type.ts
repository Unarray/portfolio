type TechnologieType = "lang" | "tool" | "lib" | "db"
export type TechnologieID = `${TechnologieType}.${string}`

export type Technologie = {
  name: string;
  iconURL: string;
}
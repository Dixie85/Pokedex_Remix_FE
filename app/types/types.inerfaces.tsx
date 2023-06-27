export interface IAbility {
  ability: string
}

export interface IType {
  type: string
}

export interface IPokemon {
  poke_id:number,
  name:string,
  weight:number,
  height: number
  abilities: IAbility[],
  types: IType[],
  image: string,
}
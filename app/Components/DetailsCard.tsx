import type { IAbility, IPokemon, IType } from "~/types/types.inerfaces"
import StatsSpanComponent from "./StatsSpanComponent";
import { colors } from "~/Assets/Colors/typeColors";
import LikeButton from "./LikeButton";

interface ISearchCard {
  pokemon: IPokemon
}

const DetailsCard = ({ pokemon }: ISearchCard) => {
  const pokeType = pokemon!.types[0].type ?? colors["normal"]

  return (
    //@ts-ignore
    <article className={`relative flex flex-row-reverse p-2 mt-3 rounded-lg shadow-lg overflow-hidden ${colors[pokeType]} md:mb-20`}>

      <section className=" flex-1 flex flex-col p-3 items-center">
        <section>
          <h1 className="flex-1 text-center text-3xl capitalize">{pokemon?.name}</h1>
          <span className=""># {pokemon?.poke_id}</span>
        </section>
        <figure className="flex ml-2 bg-purple">
          <img src={pokemon?.image} alt={pokemon?.name} />
        </figure>
      </section>

      <section className="p-3 border-r ">
        <section className="flex flex-col justify-between h-full">
          <p className="mb-2 text-base text-center border-b uppercase">Stats</p>
          <p className="mb-2">Weight: <StatsSpanComponent value={pokemon?.weight} /> </p>
          <p className="mb-2">Height: <StatsSpanComponent value={pokemon?.height} /></p>
          <div className="mb-2">
            <h4 className="mb-1">Abilities:</h4>
            {pokemon?.abilities?.map((a: IAbility, index: number) => <p key={index} className="mb-2"><StatsSpanComponent value={a.ability} /></p>)}
          </div>
          <div className="mb-2">
            <h4 className="mb-1">Type:</h4>
            {pokemon?.types?.map((t: IType, index: number) => <p key={index} className="mb-2"><StatsSpanComponent value={t.type} /></p>)}
          </div>
        </section>
      </section>

      <LikeButton styles="absolute bottom-1 right-1 p-2" />

    </article>
  )
}

export default DetailsCard
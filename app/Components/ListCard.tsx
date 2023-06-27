import { Link } from "@remix-run/react"
import type { IPokemon } from "~/types/types.inerfaces"
import LikeButton from "./LikeButton";

interface IListCard {
  pokemon: IPokemon
}

const ListCard = ({ pokemon }: IListCard) => {
  return (
    <Link to="../details" state={{ pokemon }} >
      <article className="flex items-center my-2 p-2 shadow-md rounded-md bg-gray-50/40 hover:bg-rose-200/60 overflow-hidden">
        <LikeButton styles="p-2"/>
        <h2 className="flex-1 text-4xl capitalize text-center">{pokemon.name}</h2>
        <figure className="flex ml-2">
          <img src={pokemon.image} alt={pokemon.name} className="max-w-[5rem] mr-5" />
        </figure>
      </article>
    </Link>
  )
}

export default ListCard
import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import type { IPokemon } from "~/types/types.inerfaces";
import { useActionData } from "@remix-run/react";
import ListCard from "~/Components/ListCard";
import pokeNoMatch from "../Assets/Images/pokebal_error.webp"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "List" },
    { name: "description", content: "List of search resaults" },
  ];
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const { userInput, sortby } = Object.fromEntries(formData);
  console.log(userInput);

  const res = await fetch(`http://localhost:8088/api/pokemon/${userInput}/${sortby}`);
  return res;
}


const List = () => {
  const data = useActionData<typeof action>();
  if (data?.error) throw new Error(data?.error)
  console.log(data, 'data');
  console.log(data?.docs);
  const poke = data?.docs ?? []
  return (
    <section className="flex flex-col mb-20">
      {
        poke.length > 0
          ? poke.map((p: IPokemon) => <ListCard key={p.poke_id} pokemon={p} />)
          : <section className="flex flex-col items-center p-5 w-full text-center">
            <h2 className="my-4 text-2xl">PokeLover!</h2>
            <p>Remember simply enter an <span className="text-xl text-green-500">ID</span> a <span className="text-xl text-violet-600">Name</span> or just a <span className="text-xl text-cyan-600">Part Of A Name</span> </p>
          </section>
      }
    </section>
  )
}

export default List

export function ErrorBoundary() {
  return (
    <section className="flex flex-col items-center p-5 w-full h-full">
      <h2 className="text-2xl text-red-500 capitalize"> No match found</h2>
      <img src={pokeNoMatch} alt="No match found" />
      <span className="text-xl capitalize">Try again</span>
    </section>
  )
}
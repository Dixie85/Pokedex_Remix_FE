import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node"
import { Form, Outlet, useLoaderData, useLocation, } from "@remix-run/react";
import Header from "~/Layout/Header";
import Footer from "~/Layout/Footer";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pokedex_search" },
    { name: "description", content: "Pokedex" },
  ];
};

export async function loader({ request }: LoaderArgs) {
  const cookie = request.headers.get("Cookie");
  if (!cookie) return redirect('/login')
  return {}
}

export default function Pokedex() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  const { pathname } = useLocation()

  return (
    <section className="flex flex-col justify-between max-w-screen h-screen">

      <Header />

      <section className="h-full bg-red-400/5">
        <main className="p-2 pt-3  h-full max-w-screen-md overflow-auto m-auto">
          <Form method="POST" action="/pokedex/list" className="flex p-3 bg-green-400/20 rounded-xl shadow ">

            <section className="flex-1 flex flex-col">
              <input name="userInput" type="text" placeholder="ID or Name" className="p-2 text-lg rounded-md shadow outline-none placeholder:text-center " />

              <button type="submit" className="flex-1 mt-4  bg-gray-500/50 text-2xl rounded-xl hover:text-red-600 hover:bg-black/30 active:bg-black/20 active:text-red-600/40">
                G O
              </button>
            </section>

            <fieldset className="flex flex-col p-2  text-gray-800/90">
              <legend>Sort result by ...</legend>
              <label><input type="radio" name="sortby" value="-poke_id" /> Id ⬆ </label>
              <label><input type="radio" name="sortby" value="-name" /> Name Z-A ⬆ </label>
              <label><input type="radio" name="sortby" value="poke_id" /> Id ⬇ </label>
              <label><input type="radio" name="sortby" value="name" /> Name A-Z ⬇ </label>

            </fieldset>
          </Form>
          {pathname == '/pokedex'
            ? <section className="flex flex-col items-center p-5 w-full text-center">
              <h2 className="my-4 text-2xl">Welcome PokeLover!!!</h2>
              <p>To find one of many Pokemons registered in our <b>Pokedex</b> simply enter an <span className="text-xl text-green-500">ID</span> a <span className="text-xl text-violet-600">Name</span> or just a <span className="text-xl text-cyan-600">Part Of A Name</span> </p>
            </section>
            : <Outlet />
          }

        </main>
      </section>

      <Footer />

    </section>
  );
}

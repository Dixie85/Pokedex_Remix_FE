import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import InfoButton from "~/Components/InfoButton";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Welcome" },
    { name: "description", content: "Welcome Pokedex!" },
  ];
};

export default function Index() {
  return (
    <main className="flex max-w-screen-md h-screen bg-cover bg-Hero mx-auto overflow-hidden">
      <section className="flex flex-col w-screen h-screen ">
        <section className="relative flex flex-col justify-start  w-full h-full">
          <p className="my-5 text-5xl text-center">Welcome To </p>
          <h1 className="relative -left-12 flex self-center px-5 mb-16 text-[5.5rem] max-w-[300px] sm:text-9xl -rotate-[9deg] ">Poké <span className="absolute  block text-[5rem] text-yellow-500/95 rotate-[25deg] -bottom-14 -right-20 sm:-bottom-16 sm:-right-28">dex</span></h1>
          <section className="flex  flex-col justify-center items-center h-1/2">
            <Link to='/login'><button className="mb-14 px-16 py-3 bg-amber-400/75 text-4xl text-gray-900 rounded-2xl shadow-2xl hover:text-orange-400 hover:bg-black/20  hover:shadow-lg ">LogIn</button></Link>
            <Link to='/register'><button className="mb-14 px-16 py-3 bg-amber-400/75 text-4xl text-gray-900 rounded-2xl shadow-2xl hover:text-orange-400 hover:bg-black/20  hover:shadow-lg ">Register</button></Link>
          </section>
          <InfoButton />
        </section>
      </section>
    </main>
  );
}


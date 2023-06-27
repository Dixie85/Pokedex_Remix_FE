import type { V2_MetaFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import InfoButton from "~/Components/InfoButton";
import BackButton from "~/Components/BackButton";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Register" },
    { name: "description", content: "Register to Pokedex!" },
  ];
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();
    const userCredentials = Object.fromEntries(formData)
    const req = await fetch(`http://localhost:8088/api/pokeusers/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });
    if (req.ok) return redirect('/login')
    return "Username allready exist"
  } catch (error) {
    console.log(error);

  }

};

export default function LogIn() {
  const data = useActionData<typeof action>();
  console.log(data);

  return (
    <main className="relative flex max-w-screen-md h-screen mx-auto  bg-cover bg-Hero">
      <section className="flex flex-col w-screen h-screen ">
        <BackButton />
        <section className="m-auto p-2">
          <h1 className="mb-8 font-Great text-6xl text-center">Register</h1>
          <Form method="post" className="flex flex-col">
            <label className="my-4 text-2xl"> E-mail: </label>
            <input name="email" type="text" placeholder="e-mail" className="p-2 text-2xl text-orange-300 text-center bg-black/60 rounded-md placeholder:text-gray-100/90 placeholder:text-center placeholder:italic outline-none" />
            <label className="my-4 text-2xl"> Password: </label>
            <input name="password" type="password" placeholder="password" className="p-2 text-2xl text-orange-300 text-center bg-black/60 rounded-md placeholder:text-gray-100/90 placeholder:text-center placeholder:italic outline-none" />
            <button type="submit" className="mt-10 px-5 py-2 bg-amber-400/80 text-2xl rounded-2xl hover:text-orange-400 hover:bg-black/20  hover:shadow-lg">Register</button>
          </Form>
          {data ? <p className="mt-2 text-2xl text-right">{data as string}</p> : null}
        </section>
        <InfoButton />
      </section>
    </main>
  );
}

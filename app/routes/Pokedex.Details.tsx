import type { V2_MetaFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";

import DetailsCard from "~/Components/DetailsCard";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Poke_Details" },
    { name: "description", content: "Pokemon details" },
  ];
};

const Details = () => {
  const { state } = useLocation();

  return (
    <>
      {state ? <DetailsCard pokemon={state?.pokemon} /> : <span></span>}
    </>
  )
}

export default Details

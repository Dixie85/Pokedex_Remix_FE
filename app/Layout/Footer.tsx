import pokeicon2 from "../Assets/Images/pokebal2.png"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen overflow-hidden h-20 bg-white">
    <div className=" bg-gradient-to-t from-blue-400/80 to-blue-400/5">
      <figure className="flex ml-3 self-end">
        <img src={pokeicon2} alt="pokebalicon" className="max-w-[5rem] mr-5 " />
      </figure>

    </div>
  </footer>
  )
}

export default Footer
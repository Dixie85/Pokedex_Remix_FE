import pokeicon from "../Assets/Images/pokebal1.png"

const Header = () => {
  return (
    <header className=" w-screen h-20 bg-white shadow">
      <div className="flex justify-between items-center bg-gradient-to-b from-blue-400/80 to-blue-400/5">
        <h1 className="flex-1 text-center text-5xl text-red-500">Pokédex</h1>
        <figure className="flex justify-end">
          <img src={pokeicon} alt="pokebalicon" className="max-w-[5rem] mr-5 rotate-6" />
        </figure>
      </div>
    </header>
  )
}

export default Header
import { BsInfoCircleFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoLight } from "react-icons/pi";

const InfoButton = () => {
  return (
    <section className="absolute pt-4 bottom-3 right-3 group">
    <button><BsInfoCircleFill className="text-green-100/70 text-4xl " /></button>
    <section className="absolute  bottom-14 -right-2 hidden group-hover:block">
      <a href="https://www.linkedin.com/in/dimitar-eftimov-393b4a254/" target="_blank" rel="noreferrer"><PiLinkedinLogoLight className="text-5xl text-gray-100/90"/></a>
      <a href="https://github.com/Dixie85" target="_blank" rel="noreferrer"><VscGithub className="text-5xl text-gray-100/90"/></a>
    </section>
  </section>
  )
}

export default InfoButton
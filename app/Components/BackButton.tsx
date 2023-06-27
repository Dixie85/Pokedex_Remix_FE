
import {IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <section className='absolute top-2 left-2 p-2'>
      <button onClick={() => navigate(-1)}><IoIosArrowDropleftCircle className="text-4xl"/></button>
    </section>
  )
}

export default BackButton
import { GoHeart } from "react-icons/go";

interface ILikeButton {
  styles: string
}

const LikeButton = ({ styles }: ILikeButton) => {

  const onButonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Pokemon was liked");
  }

  return (
    <button
      className={styles}
      onClick={onButonClick}
    ><GoHeart className="text-red-700 text-3xl" />
    </button>
  )
}

export default LikeButton
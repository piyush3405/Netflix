import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-24 md:w-48 pr-2">
      <img alt="Movie Card" src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard

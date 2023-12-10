import { useSelector } from "react-redux"
import MainVideoBackground from "./MainVideoBackground"
import MainVideoTitle from "./MainVideoTitle"

const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);

  if(!movies) return;
  const mainMovie=movies[0];

  const {original_title,overview,id}=mainMovie;

  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <MainVideoTitle title={original_title} overview={overview} />
      <MainVideoBackground movieId={id} /> 
    </div>
  )
}

export default MainContainer


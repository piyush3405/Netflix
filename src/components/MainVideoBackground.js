import {useSelector} from "react-redux";
import useMovietrailer from "../hooks/useMovieTrailer";

const MainVideoBackground = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  useMovietrailer(movieId);

  return (
   <div >
   <div >
      <iframe 
      className="w-screen aspect-video "
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
   </div>
    

   </div>
  )
}

export default MainVideoBackground

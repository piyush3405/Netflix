import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import ListContainer from "./ListContainer";
import MainContainer from "./MainContainer";


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <ListContainer/> 
    </div>
  )
}

export default Browse

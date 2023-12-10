import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const ListContainer = () => {

  const movies=useSelector(store=>store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
    <div className="mt-0 md:-mt-40 relative z-20 pl-0 md:pl-8">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>)
  )
}

export default ListContainer

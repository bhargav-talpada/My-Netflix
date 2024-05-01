import { useSelector } from "react-redux"
import MovieList from "./MovieList"

function SecoundaryContainer() {

  const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black w-screen">
        <div className="-mt-52 pl-7 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horrer"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecoundaryContainer
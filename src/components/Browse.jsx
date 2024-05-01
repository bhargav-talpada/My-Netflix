import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundaryContainer />

      {/* 
        MainContainer
          - Video background
          - Video title
        SecoundaryContainer
          - Movie list  * n
            - card * n
      */}

    </div>
  )
}

export default Browse;
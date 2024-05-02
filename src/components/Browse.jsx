import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? 
          <GPTSearch />
        :
          <>
            <MainContainer />
            <SecoundaryContainer />
          </>
      }

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
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
const Browse = () => {

  useNowPlayingMovies();

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
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(movies == null) return;

    const mainMovie = movies[0];
    console.log("Main Movie",mainMovie);

    const {original_title, overview, id} = mainMovie;

  return (
    <div>
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}

export default MainContainer
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer"

function VideoBackground({movieId}) {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen ">
      <iframe
        className=" w-screen aspect-video h-full"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default VideoBackground
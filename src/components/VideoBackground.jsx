import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";

function VideoBackground({movieId}) {

  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);;

  // fetch trailer video

  useEffect(() => {
    getMovieTrailer();
  },[]);

  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/1096197/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    console.log("Movie Trailer",json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("trailer", trailer);

    dispatch(addTrailerVideo(trailer));
  };
  

  return (
    <div>
      <iframe
        width={560}
        height={315}
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen=""
      />
    </div>
  )
}

export default VideoBackground
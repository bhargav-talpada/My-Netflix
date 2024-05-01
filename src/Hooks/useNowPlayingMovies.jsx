import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    },[]);

    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log("All Movies",json.results);
        dispatch(addNowPlayingMovies(json.results));
    };
};

export default useNowPlayingMovies;
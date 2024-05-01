import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log("All Movies",json.results);
        dispatch(addPopularMovies(json.results));
    };
};

export default usePopularMovies;
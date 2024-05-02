import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUpcomingMovies();
    },[]);

    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    };
};

export default useUpcomingMovies;
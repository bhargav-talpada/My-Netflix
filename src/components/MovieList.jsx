import { useRef } from "react";
import MovieCard from "./MovieCard"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function MovieList({title, movies}) {

  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  }
  
  return (
    <div className="px-5 bg-transparent">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex justify-center text-3xl mr-3 mt-2">
          <BsArrowLeftCircleFill onClick={() => scroll(-500)} className="text-white transition-all duration-700 hover:scale-125 cursor-pointer" />
          <BsArrowRightCircleFill onClick={() => scroll(500)} className="ml-4 text-white transition-all duration-700 hover:scale-125 cursor-pointer" />
        </div>
      </div>
      <div className="flex overflow-x-scroll overflow-y-hidden scroll-smooth" ref={scrollRef} style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList
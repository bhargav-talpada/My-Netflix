import MovieCard from "./MovieCard"

function MovieList({title, movies}) {


  return (
    <div className="px-5 bg-transparent">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden" style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
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
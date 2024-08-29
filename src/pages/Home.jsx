import { useSelector } from 'react-redux';
import RowMovies from '../componets/RowMovies'
import SearchMovies from '../componets/SearchMovies'

export default function Home() {
  const movies = useSelector((state) => state.movies.value);
  const currentSearch = useSelector((state) => state.currentSearch.value);

  return (
    <div >
      {currentSearch && currentSearch.length > 0 ? (
        <SearchMovies movies={currentSearch} category="search"/>
      ) : (
        movies && movies.film && (
          <>
            {movies.film.list.map((film, i) => (
              <div key={i}>
                <h3 className='container mx-auto px-4 text-2xl font-bold'>
                  Film {movies.film.genres.find((film) => film.id === movies.film.index[i]).name}
                </h3>
                <RowMovies movies={film} category="film" index={i}/>
              </div>
            ))}

            {movies.series.list.map((series, i) => (
              <div key={i}>
                <h3 className='container mx-auto px-4 text-2xl font-bold'>
                  Serie {movies.series.genres.find((serie) => serie.id === movies.series.index[i]).name}
                </h3>
                <RowMovies movies={series}  category="series" index={i} />
              </div>
            ))}
          </>
        ))}
    </div>
  );
}


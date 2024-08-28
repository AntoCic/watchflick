import { useSelector } from 'react-redux';
import RowMovies from '../componets/RowMovies'
import SearchMovies from '../componets/SearchMovies'
// ASSETS

// STYLE
import '../style/Home.css'

function Home() {
  const movies = useSelector((state) => state.movies.value);
  const currentSearch = useSelector((state) => state.currentSearch.value);


  return (
    <div >
      {currentSearch && currentSearch.list && currentSearch.list.length > 0 ? (
        <SearchMovies movies={currentSearch.list} />
      ) : (
        movies && movies.film && (
          <>
            {movies.film.list.map((film, i) => (
              <div key={i}>
                <h3 className='container mx-auto px-4 text-2xl font-bold'>
                  Film {movies.film.genres.find((film) => film.id === movies.film.index[i]).name}
                </h3>
                <RowMovies movies={film} />
              </div>
            ))}

            {movies.series.list.map((series, i) => (
              <div key={i}>
                <h3 className='container mx-auto px-4 text-2xl font-bold'>
                  Serie {movies.series.genres.find((serie) => serie.id === movies.series.index[i]).name}
                </h3>
                <RowMovies movies={series} />
              </div>
            ))}
          </>
        ))}
    </div>
  );
}

export default Home
